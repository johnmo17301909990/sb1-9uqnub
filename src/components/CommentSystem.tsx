import React, { useState } from 'react';
import { Star } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

interface Comment {
  id: number;
  username: string;
  content: string;
  rating: number;
  date: string;
}

interface CommentSystemProps {
  carId: number;
  initialComments: Comment[];
}

const CommentSystem: React.FC<CommentSystemProps> = ({ carId, initialComments }) => {
  const [comments, setComments] = useState<Comment[]>(initialComments);
  const [newComment, setNewComment] = useState('');
  const [rating, setRating] = useState(0);
  const { user } = useAuth();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) {
      alert('请先登录后再评论');
      return;
    }
    if (newComment.trim() === '' || rating === 0) return;

    const comment: Comment = {
      id: comments.length + 1,
      username: user.username,
      content: newComment,
      rating: rating,
      date: new Date().toLocaleDateString()
    };

    setComments([...comments, comment]);
    setNewComment('');
    setRating(0);
  };

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">评论与评分</h2>
      {user ? (
        <form onSubmit={handleSubmit} className="mb-6">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="rating">
              评分
            </label>
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  size={24}
                  fill={star <= rating ? 'gold' : 'none'}
                  stroke={star <= rating ? 'gold' : 'currentColor'}
                  className="cursor-pointer"
                  onClick={() => setRating(star)}
                />
              ))}
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="comment">
              评论
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="comment"
              rows={4}
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="写下您的评论..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            提交评论
          </button>
        </form>
      ) : (
        <p className="mb-6 text-gray-600">请登录后发表评论</p>
      )}
      <div>
        {comments.map((comment) => (
          <div key={comment.id} className="border-b border-gray-200 py-4">
            <div className="flex items-center mb-2">
              <span className="font-bold mr-2">{comment.username}</span>
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    size={16}
                    fill={star <= comment.rating ? 'gold' : 'none'}
                    stroke={star <= comment.rating ? 'gold' : 'currentColor'}
                  />
                ))}
              </div>
              <span className="text-gray-500 text-sm ml-2">{comment.date}</span>
            </div>
            <p>{comment.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentSystem;