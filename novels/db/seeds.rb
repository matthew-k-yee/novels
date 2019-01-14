# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


users = User.create([
  {
    username: "111",
    email: "111@gmail.com",
    password: "111",
    firstname: "Bob",
    lastname: "Smith"
  },
  {
    username: "222",
    email: "222@gmail.com",
    password: "222",
    firstname: "Liz",
    lastname: "Chen"
  },
  {
    username: "333",
    email: "333@gmail.com",
    password: "333",
    firstname: "Henry",
    lastname: "Williams"
  }
])



Genre.create([
  {
    genre_title: 'Art'
  },
  {
    genre_title: "Biography"
  },
  {
    genre_title: 'Business'
  },
  {
    genre_title: "Children's"
  },
  {
    genre_title: 'Christian'
  },
  {
    genre_title: 'Classics'
  },
  {
    genre_title: 'Comics'
  },
  {
    genre_title: 'Cookbook'
  },
  {
    genre_title: 'Ebooks'
  },
  {
    genre_title: 'Fantasy'
  },
  {
    genre_title: 'Fiction'
  },
  {
    genre_title: "Graphic Novels"
  },
  {
    genre_title: 'Historical Fiction'
  },
  {
    genre_title: 'History'
  },
  {
    genre_title: "Horror"
  },
  {
    genre_title: 'Memoir'
  },
  {
    genre_title: 'Music'
  },
  {
    genre_title: 'Mystery'
  },
  {
    genre_title: 'Nonfiction'
  },
  {
    genre_title: 'Poetry'
  },
  {
    genre_title: 'Psychology'
  },
  {
    genre_title: 'Romance'
  },
  {
    genre_title: "Science"
  },
  {
    genre_title: 'Science Fiction'
  },
  {
    genre_title: "Self Help"
  },
  {
    genre_title: 'Sports'
  },
  {
    genre_title: 'Thriller'
  },
  {
    genre_title: 'Travel'
  },
  {
    genre_title: 'Young Adult'
  }
  ])



Book.create([
  {
    title: "1Q84",
    author: "Haruki Murakami",
    summary: "Norwegian Wood is a 1987 novel by Japanese author Haruki Murakami. The novel is a nostalgic story of loss and burgeoning sexuality. It is told from the first-person perspective of Toru Watanabe, who looks back on his days as a college student living in Tokyo.",
    genre_id: '11',
    image: "https://upload.wikimedia.org/wikipedia/en/5/59/1Q84_%28United_States_edition%29.jpg"
  },
  {
    title: "Harry Potter and the Philosopher's Stone",
    author: "JK Rowling",
    summary: "he first novel in the Harry Potter series and Rowling's debut novel, it follows Harry Potter, a young wizard who discovers his magical heritage on his eleventh birthday,when he receives a letter of acceptance to Hogwarts School of Witchcraft and Wizardry.",
    genre_id: '4',
    image: "https://upload.wikimedia.org/wikipedia/en/6/6b/Harry_Potter_and_the_Philosopher%27s_Stone_Book_Cover.jpg"
  },
  {
    title: "The Life of Pi",
    author: "Yann Martel",
    summary: "Life of Pi is a Canadian fantasy adventure novel by Yann Martel published in 2001. The protagonist is Piscine Molitor 'Pi' Patel, an Indian boy from Pondicherry who explores issues of spirituality and practicality from an early age.",
    genre_id: '11',
    image: "https://upload.wikimedia.org/wikipedia/en/4/45/Life_of_Pi_cover.png"
  },
  {
    title: "A Game of Thrones",
    author: "George R.R. Martin",
    summary: "A Game of Thrones is the first novel in A Song of Ice and Fire, a series of fantasy novels by American author George R. R. Martin. It was first published on August 1, 1996. The novel won the 1997 Locus Awardand was nominated for both the 1997 Nebula Award and the 1997 World Fantasy Award.",
    genre_id: '10',
    image: "https://upload.wikimedia.org/wikipedia/en/9/93/AGameOfThrones.jpg"
  }
])

Comment.create([
  {
    review: '1Q84 is undoubtedly the biggest literary let-down I have ever come across. The synopsis and plot outline sound fascinating, the reviews have been glowing - am I (trying to) read a different 1Q84 than everyone else?',
    book_id: '1',
		user_id: '1'
  },
  {
    review: 'every crazy page of this ginormous book. Definitely one of my top reads of 2017',
    book_id: '1',
    user_id: '2'
  },
  {
    review: "IT'S HARRY FREAKIN POTTER OF COURSE I LOVE IT",
    book_id: '2',
    user_id: '3'
  },
  {
    review: "This is a disgrace to all pure bloods. My head looked quite dashing on that strange professor's head.. If only I could have extended my stay. Harry Potter.. This is not over yet.",
    book_id: '2',
    user_id: '1'
  },
  {
    review: 'There are several boring parts in this book, but I give 5 stars to it because I felt very strong emotions at the end.',
    book_id: '3',
    user_id: '2'
  },
  {
    review: 'I had to read this book for class during my junior year of high school. I had never heard of it, and was surprised to not receive a classic, but this might as well be a Canadian classic in a few hundred years. After I read it I gave it to my friend with all the notes I took for class, she loved it. I felt accomplished. ',
    book_id: '3',
    user_id: '3'
  },
  {
    review: "I really can't review this, the story is way to complicated to even begin to do that.",
    book_id: '4',
    user_id: '1'
  },
  {
    review: "(A-) 81% | Very Good
Notes: A shocking story that breaks fantasy conventions, it's seven hundred pages of realpolitik and character development.",
    book_id: '4',
    user_id: '2'
  },
  ])
