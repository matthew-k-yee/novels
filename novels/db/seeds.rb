# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.create([
  {
    username: "111",
    email: "111@gmail.com",
    password: "111",
    firstname: "aaa",
    lastname: "aaa"
  },
  {
    username: "222",
    email: "222@gmail.com",
    password: "222",
    firstname: "bbb",
    lastname: "bbb"
  },
  {
    username: "333",
    email: "333@gmail.com",
    password: "333",
    firstname: "ccc",
    lastname: "ccc"
  }
])

Genre.create([
  {
    genre_title: 'nonfiction'
  },
  {
    genre_title: "fiction"
  }
  ])



Book.create([
  {
    title: "19Q4",
    author: "Haruki Murakami",
    summary: "Norwegian Wood is a 1987 novel by Japanese author Haruki Murakami. The novel is a nostalgic story of loss and burgeoning sexuality. It is told from the first-person perspective of Toru Watanabe, who looks back on his days as a college student living in Tokyo.",
    genre_id: '2'
  },
  {
    title: "Harry Potter and the Philosopher's Stone",
    author: "JK Rowling",
    summary: "he first novel in the Harry Potter series and Rowling's debut novel, it follows Harry Potter, a young wizard who discovers his magical heritage on his eleventh birthday,when he receives a letter of acceptance to Hogwarts School of Witchcraft and Wizardry.",
    genre_id: '2'
  },
  {
    title: "The Life of Pi",
    author: "Yann Martel",
    summary: "Life of Pi is a Canadian fantasy adventure novel by Yann Martel published in 2001. The protagonist is Piscine Molitor 'Pi' Patel, an Indian boy from Pondicherry who explores issues of spirituality and practicality from an early age.",
    genre_id: '2'
  },
  {
    title: "A Game of Thrones",
    author: "George R.R. Martin",
    summary: "A Game of Thrones is the first novel in A Song of Ice and Fire, a series of fantasy novels by American author George R. R. Martin. It was first published on August 1, 1996. The novel won the 1997 Locus Awardand was nominated for both the 1997 Nebula Award and the 1997 World Fantasy Award.",
    genre_id: '2'
  }
])
