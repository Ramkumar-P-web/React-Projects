import React, { useState } from "react";

function CommentSection({ comments, addComment }) {
    const [newComment, setNewComment] = useState("");

    const handleCommentSubmit = (e) => {
        e.preventDefault();
        if (newComment.trim() !== "") {
            addComment(newComment);
            setNewComment("");
        }
    };

    return (
        <div className="mt-2 bg-secondary p-2 rounded">
            {/* Display Comments */}
            {comments.map((comment, index) => (
                <p key={index} className="mb-1">
                    <strong>{comment.user}</strong> {comment.text}
                </p>
            ))}

            {/* Add Comment Form */}
            <form onSubmit={handleCommentSubmit} className="mt-2 d-flex">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Add a comment..."
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                />
                <button type="submit" className="btn btn-primary ms-2">
                    Post
                </button>
            </form>
        </div>
    );
}

export default CommentSection;
