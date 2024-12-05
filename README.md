SQL commands for create table :

CREATE TABLE book_reviews (
    review_id INT AUTO_INCREMENT PRIMARY KEY,
    book_name VARCHAR(100) NOT NULL,
    rating INT CHECK (rating >= 1 AND rating <= 5),
    author_name VARCHAR(100) NOT NULL,
    topic VARCHAR(50)
);