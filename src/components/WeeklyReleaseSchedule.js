import React from 'react'
// import PropTypes from 'prop-types'

import './WeeklyReleaseSchedule.css';

import WeekdayTile from './WeekdayTile';

const seasonal = [
  {
    "mal_id": 38408,
    "url": "https://myanimelist.net/anime/38408/Boku_no_Hero_Academia_4th_Season",
    "title": "Boku no Hero Academia 4th Season",
    "image_url": "https://cdn.myanimelist.net/images/anime/1315/102961.jpg?s=e6d51d67a33dbe07ea32ae0b9420f19f",
    "synopsis": "Fourth season of Boku no Hero Academia.",
    "type": "TV",
    "airing_start": "2019-10-12T08:30:00+00:00",
    "episodes": 25,
    "members": 317857,
    "genres": [
      {
        "mal_id": 1,
        "type": "anime",
        "name": "Action",
        "url": "https://myanimelist.net/anime/genre/1/Action"
      },
      {
        "mal_id": 4,
        "type": "anime",
        "name": "Comedy",
        "url": "https://myanimelist.net/anime/genre/4/Comedy"
      },
      {
        "mal_id": 31,
        "type": "anime",
        "name": "Super Power",
        "url": "https://myanimelist.net/anime/genre/31/Super_Power"
      },
      {
        "mal_id": 23,
        "type": "anime",
        "name": "School",
        "url": "https://myanimelist.net/anime/genre/23/School"
      },
      {
        "mal_id": 27,
        "type": "anime",
        "name": "Shounen",
        "url": "https://myanimelist.net/anime/genre/27/Shounen"
      }
    ],
    "source": "Manga",
    "producers": [
      {
        "mal_id": 4,
        "type": "anime",
        "name": "Bones",
        "url": "https://myanimelist.net/anime/producer/4/Bones"
      }
    ],
    "score": 8.24,
    "licensors": [],
    "r18": false,
    "kids": false,
    "continuing": false
  },
  {
    "mal_id": 39597,
    "url": "https://myanimelist.net/anime/39597/Sword_Art_Online__Alicization_-_War_of_Underworld",
    "title": "Sword Art Online: Alicization - War of Underworld",
    "image_url": "https://cdn.myanimelist.net/images/anime/1630/103417.jpg?s=23260f5afd023ecade488b7e8e160498",
    "synopsis": "Despite the defeat of Quinella—the pontifex of the Axiom Church—things have not seemed to calm down yet. Upon contacting the real world, Kazuto \"Kirito\" Kirigaya finds out that the Ocean Turtle—a mega-float controlled by Rath—was raided. Due to a sudden short-circuit caused by the raiders, Kirito's fluctlight is damaged, leaving him comatose. Feeling insecure about the people at the Axiom Church, Alice brings the unconscious Kirito back to their hometown—Rulid Village, disregarding her banishment due to an unabsolved crime. Now, Alice is living an ordinary and peaceful life close by the village, wishing for Kirito to wake up.\r\n\r\nHowever, tragedy strikes when Alice notices that the Dark Territory has already started to invade the Human Empire. Reassuming her previous alias, Alice Synthesis Thirty, she promises to defeat the Dark Territory in order to defend the world that Kirito and Eugeo worked so hard to protect.\r\n\r\n[Written by MAL Rewrite]",
    "type": "TV",
    "airing_start": "2019-10-12T15:00:00+00:00",
    "episodes": 12,
    "members": 153745,
    "genres": [
      {
        "mal_id": 1,
        "type": "anime",
        "name": "Action",
        "url": "https://myanimelist.net/anime/genre/1/Action"
      },
      {
        "mal_id": 2,
        "type": "anime",
        "name": "Adventure",
        "url": "https://myanimelist.net/anime/genre/2/Adventure"
      },
      {
        "mal_id": 10,
        "type": "anime",
        "name": "Fantasy",
        "url": "https://myanimelist.net/anime/genre/10/Fantasy"
      },
      {
        "mal_id": 11,
        "type": "anime",
        "name": "Game",
        "url": "https://myanimelist.net/anime/genre/11/Game"
      },
      {
        "mal_id": 22,
        "type": "anime",
        "name": "Romance",
        "url": "https://myanimelist.net/anime/genre/22/Romance"
      }
    ],
    "source": "Light novel",
    "producers": [
      {
        "mal_id": 56,
        "type": "anime",
        "name": "A-1 Pictures",
        "url": "https://myanimelist.net/anime/producer/56/A-1_Pictures"
      }
    ],
    "score": 7.89,
    "licensors": [
      "Aniplex of America"
    ],
    "r18": false,
    "kids": false,
    "continuing": false
  },
  {
    "mal_id": 39701,
    "url": "https://myanimelist.net/anime/39701/Nanatsu_no_Taizai__Kamigami_no_Gekirin",
    "title": "Nanatsu no Taizai: Kamigami no Gekirin",
    "image_url": "https://cdn.myanimelist.net/images/anime/1546/103418.jpg?s=36515b428954a194e48a2ce3427daf9f",
    "synopsis": "New season of Nanatsu no Taizai.",
    "type": "TV",
    "airing_start": "2019-10-09T08:55:00+00:00",
    "episodes": 24,
    "members": 137040,
    "genres": [
      {
        "mal_id": 1,
        "type": "anime",
        "name": "Action",
        "url": "https://myanimelist.net/anime/genre/1/Action"
      },
      {
        "mal_id": 2,
        "type": "anime",
        "name": "Adventure",
        "url": "https://myanimelist.net/anime/genre/2/Adventure"
      },
      {
        "mal_id": 37,
        "type": "anime",
        "name": "Supernatural",
        "url": "https://myanimelist.net/anime/genre/37/Supernatural"
      },
      {
        "mal_id": 16,
        "type": "anime",
        "name": "Magic",
        "url": "https://myanimelist.net/anime/genre/16/Magic"
      },
      {
        "mal_id": 10,
        "type": "anime",
        "name": "Fantasy",
        "url": "https://myanimelist.net/anime/genre/10/Fantasy"
      },
      {
        "mal_id": 27,
        "type": "anime",
        "name": "Shounen",
        "url": "https://myanimelist.net/anime/genre/27/Shounen"
      }
    ],
    "source": "Manga",
    "producers": [
      {
        "mal_id": 37,
        "type": "anime",
        "name": "Studio Deen",
        "url": "https://myanimelist.net/anime/producer/37/Studio_Deen"
      }
    ],
    "score": 6.83,
    "licensors": [],
    "r18": false,
    "kids": false,
    "continuing": false
  },
  {
    "mal_id": 39940,
    "url": "https://myanimelist.net/anime/39940/Shokugeki_no_Souma__Shin_no_Sara",
    "title": "Shokugeki no Souma: Shin no Sara",
    "image_url": "https://cdn.myanimelist.net/images/anime/1258/102849.jpg?s=39f05c59bef3bf56e15e17d553066e15",
    "synopsis": "Fourth season of Shokugeki no Souma.",
    "type": "TV",
    "airing_start": "2019-10-11T15:30:00+00:00",
    "episodes": null,
    "members": 129208,
    "genres": [
      {
        "mal_id": 9,
        "type": "anime",
        "name": "Ecchi",
        "url": "https://myanimelist.net/anime/genre/9/Ecchi"
      },
      {
        "mal_id": 23,
        "type": "anime",
        "name": "School",
        "url": "https://myanimelist.net/anime/genre/23/School"
      },
      {
        "mal_id": 27,
        "type": "anime",
        "name": "Shounen",
        "url": "https://myanimelist.net/anime/genre/27/Shounen"
      }
    ],
    "source": "Manga",
    "producers": [
      {
        "mal_id": 7,
        "type": "anime",
        "name": "J.C.Staff",
        "url": "https://myanimelist.net/anime/producer/7/JCStaff"
      }
    ],
    "score": 8.05,
    "licensors": [],
    "r18": false,
    "kids": false,
    "continuing": false
  },
  {
    "mal_id": 38659,
    "url": "https://myanimelist.net/anime/38659/Shinchou_Yuusha__Kono_Yuusha_ga_Ore_Tueee_Kuse_ni_Shinchou_Sugiru",
    "title": "Shinchou Yuusha: Kono Yuusha ga Ore Tueee Kuse ni Shinchou Sugiru",
    "image_url": "https://cdn.myanimelist.net/images/anime/1715/103419.jpg?s=658134b6548786a334e842e2e27d2de3",
    "synopsis": "Goddess Listarte, the savior of the super hard-mode world Gairbrunde, summons a hero to her aid. The hero, Seiya Ryuuguuin, holds the cheat-rank status, but he is ridiculously cautious. For instance, he would buy three sets of armor: one to wear, a spare, and a spare for the spare. Beyond keeping an absurd amount of item stock, he remains in his room for muscle training till he reaches the max level and fights slimes at full power just to stay on the safe side.\r\n\r\n(Source: MAL News)",
    "type": "TV",
    "airing_start": "2019-10-02T13:30:00+00:00",
    "episodes": 12,
    "members": 106180,
    "genres": [
      {
        "mal_id": 1,
        "type": "anime",
        "name": "Action",
        "url": "https://myanimelist.net/anime/genre/1/Action"
      },
      {
        "mal_id": 2,
        "type": "anime",
        "name": "Adventure",
        "url": "https://myanimelist.net/anime/genre/2/Adventure"
      },
      {
        "mal_id": 4,
        "type": "anime",
        "name": "Comedy",
        "url": "https://myanimelist.net/anime/genre/4/Comedy"
      },
      {
        "mal_id": 10,
        "type": "anime",
        "name": "Fantasy",
        "url": "https://myanimelist.net/anime/genre/10/Fantasy"
      }
    ],
    "source": "Light novel",
    "producers": [
      {
        "mal_id": 314,
        "type": "anime",
        "name": "White Fox",
        "url": "https://myanimelist.net/anime/producer/314/White_Fox"
      }
    ],
    "score": 7.43,
    "licensors": [
      "Funimation"
    ],
    "r18": false,
    "kids": false,
    "continuing": false
  },
  {
    "mal_id": 38483,
    "url": "https://myanimelist.net/anime/38483/Ore_wo_Suki_nano_wa_Omae_dake_ka_yo",
    "title": "Ore wo Suki nano wa Omae dake ka yo",
    "image_url": "https://cdn.myanimelist.net/images/anime/1348/102797.jpg?s=50164c31a8f8908a42f86f5ce871d231",
    "synopsis": "Amatsuyu \"Jouro\" Kisaragi is a completely average second-year high school student who has two dates over one weekend⁠—with the student council president Sakura \"Cosmos\" Akino on Saturday, then with his childhood friend Aoi \"Himawari\" Hinata on Sunday. Sadly for Jouro, both girls proclaim their love for his best friend Taiyou \"Sun-chan\" Ooga, the ace of the baseball team. Accepting each of their requests for advice and guidance, he is now responsible for helping the two girls win the heart of the same guy.\r\n\r\nUnbeknownst to his friends, Jouro's friendly, obtuse image is all but a ruse designed to cast himself as the clueless protagonist of a textbook romantic comedy. A schemer under his cheery facade, he makes the best of this unexpected turn of events with a new plan: get Sun-chan to fall for either Cosmos or Himawari and take the other as his own prize. But Jouro's last-ditch effort is threatened by the gloomy, four-eyed Sumireko \"Pansy\" Sanshokuin, who surprises Jouro with not only her knowledge of his secret personality but also a confession to the true self he hid for all this time.\r\n\r\nStuck in this hilariously messy situation, each of the five students must navigate countless lies, traps, and misunderstandings to come out on top.\r\n\r\n[Written by MAL Rewrite]",
    "type": "TV",
    "airing_start": "2019-10-02T15:30:00+00:00",
    "episodes": 12,
    "members": 93297,
    "genres": [
      {
        "mal_id": 4,
        "type": "anime",
        "name": "Comedy",
        "url": "https://myanimelist.net/anime/genre/4/Comedy"
      },
      {
        "mal_id": 22,
        "type": "anime",
        "name": "Romance",
        "url": "https://myanimelist.net/anime/genre/22/Romance"
      },
      {
        "mal_id": 23,
        "type": "anime",
        "name": "School",
        "url": "https://myanimelist.net/anime/genre/23/School"
      }
    ],
    "source": "Light novel",
    "producers": [
      {
        "mal_id": 957,
        "type": "anime",
        "name": "Connect",
        "url": "https://myanimelist.net/anime/producer/957/Connect"
      }
    ],
    "score": 7.86,
    "licensors": [],
    "r18": false,
    "kids": false,
    "continuing": false
  },
  {
    "mal_id": 39491,
    "url": "https://myanimelist.net/anime/39491/Psycho-Pass_3",
    "title": "Psycho-Pass 3",
    "image_url": "https://cdn.myanimelist.net/images/anime/1587/103273.jpg?s=2d2c97c41ffdeee7ff1dcd8726298621",
    "synopsis": "Psycho-Pass 3 follows two new rookies trying to understand the Sibyl System and seek the truth in the ever changing world of Psycho-Pass.\r\n\r\n(Source: Crunchyroll) ",
    "type": "TV",
    "airing_start": "2019-10-24T15:55:00+00:00",
    "episodes": 8,
    "members": 89322,
    "genres": [
      {
        "mal_id": 1,
        "type": "anime",
        "name": "Action",
        "url": "https://myanimelist.net/anime/genre/1/Action"
      },
      {
        "mal_id": 24,
        "type": "anime",
        "name": "Sci-Fi",
        "url": "https://myanimelist.net/anime/genre/24/Sci-Fi"
      },
      {
        "mal_id": 39,
        "type": "anime",
        "name": "Police",
        "url": "https://myanimelist.net/anime/genre/39/Police"
      },
      {
        "mal_id": 40,
        "type": "anime",
        "name": "Psychological",
        "url": "https://myanimelist.net/anime/genre/40/Psychological"
      }
    ],
    "source": "Original",
    "producers": [
      {
        "mal_id": 10,
        "type": "anime",
        "name": "Production I.G",
        "url": "https://myanimelist.net/anime/producer/10/Production_IG"
      }
    ],
    "score": 7.89,
    "licensors": [],
    "r18": false,
    "kids": false,
    "continuing": false
  },
  {
    "mal_id": 38572,
    "url": "https://myanimelist.net/anime/38572/Assassins_Pride",
    "title": "Assassins Pride",
    "image_url": "https://cdn.myanimelist.net/images/anime/1267/103421.jpg?s=60eaf63a9fc0933b9068cddf915570db",
    "synopsis": "On the brink of extinction, mankind has downsized and now solely resides in the city-state of Flandore, living in cities encased by glass domes. Beyond the domes exist vicious lycanthropes who thrive in the darkness; among the citizens inside, a clear distinction between the nobility and commoners is in place. The blood of nobles enables them to utilize mana, granting them abilities that exceed human limits and greatly assist them in defeating lycanthropes.\r\n\r\nAlready 13 years of age, noble Melida Angel has yet to manifest her mana, and attends an elite academy where she is mistreated for her lack thereof. In order to help her, Kufa Vampir is ordered by the Angel family to become Melida's tutor. While Kufa seems to be a mere mentor, an ulterior motive lurks behind his job—he is to assassinate her if he confirms that she does not possess mana.\r\n\r\nKufa's investigation eventually leads him to determine he must eliminate Melida. However, Kufa is struck by her unwavering determination, spirit, and belief in herself when he witnesses her in a fight, choosing instead to offer a way she can manifest her magic. As Melida learns to use mana with the help of Kufa's teachings, Kufa forsakes his mission and jeopardizes everything to keep his discovery of Melida unknown to the Angel family and his own guild. However, both Kufa and Melida will soon realize that hiding their secret will not be the only challenge they face, as unforeseen trouble is waiting just around the corner. \r\n\r\n[Written by MAL Rewrite]",
    "type": "TV",
    "airing_start": "2019-10-10T14:30:00+00:00",
    "episodes": 12,
    "members": 89210,
    "genres": [
      {
        "mal_id": 10,
        "type": "anime",
        "name": "Fantasy",
        "url": "https://myanimelist.net/anime/genre/10/Fantasy"
      }
    ],
    "source": "Light novel",
    "producers": [
      {
        "mal_id": 1264,
        "type": "anime",
        "name": "EMT Squared",
        "url": "https://myanimelist.net/anime/producer/1264/EMT_Squared"
      }
    ],
    "score": 6.73,
    "licensors": [
      "Sentai Filmworks"
    ],
    "r18": false,
    "kids": false,
    "continuing": false
  },
  {
    "mal_id": 39539,
    "url": "https://myanimelist.net/anime/39539/No_Guns_Life",
    "title": "No Guns Life",
    "image_url": "https://cdn.myanimelist.net/images/anime/1531/102113.jpg?s=60ef192b8e39fd155c6f2b3d8ff29f3c",
    "synopsis": "The technology to create powerful cyborg soldiers has been released for public use by the Berühren Corporation. Those outfitted with robotic parts are known as the Extended. Juuzou Inui, one such Extended, was created as a soldier and has no memories of his former life. But now, after the war, he runs a business that takes care of Extended-related incidents around the city. \r\n\r\nRumors of a renegade Extended that kidnapped a child reach his ears; lo and behold, as Juuzo returns to his office,  a giant robotic man with a boy on his back crashes in, asking for help. While Juuzou could just turn the guy in and be done with it, something about this situation is too fishy to ignore. It seems that everyone wants hold of this kid and, whether he likes it or not, Juuzou must find out why this Extended is on the run, how it connects to the Berühren Corporation, and just how far the treachery runs in this city.\r\n\r\n[Written by MAL Rewrite]",
    "type": "TV",
    "airing_start": "2019-10-10T16:28:00+00:00",
    "episodes": 12,
    "members": 70967,
    "genres": [
      {
        "mal_id": 1,
        "type": "anime",
        "name": "Action",
        "url": "https://myanimelist.net/anime/genre/1/Action"
      },
      {
        "mal_id": 24,
        "type": "anime",
        "name": "Sci-Fi",
        "url": "https://myanimelist.net/anime/genre/24/Sci-Fi"
      },
      {
        "mal_id": 42,
        "type": "anime",
        "name": "Seinen",
        "url": "https://myanimelist.net/anime/genre/42/Seinen"
      }
    ],
    "source": "Manga",
    "producers": [
      {
        "mal_id": 11,
        "type": "anime",
        "name": "Madhouse",
        "url": "https://myanimelist.net/anime/producer/11/Madhouse"
      }
    ],
    "score": 7.3,
    "licensors": [],
    "r18": false,
    "kids": false,
    "continuing": false
  },
  {
    "mal_id": 38084,
    "url": "https://myanimelist.net/anime/38084/Fate_Grand_Order__Zettai_Majuu_Sensen_Babylonia",
    "title": "Fate/Grand Order: Zettai Majuu Sensen Babylonia",
    "image_url": "https://cdn.myanimelist.net/images/anime/1194/103420.jpg?s=0a14ba9cc4cffe40c6118cef8fa0d424",
    "synopsis": "A.D. 2016, the foundations of humanity have been incinerated by the Mage King Solomon. Chaldea, a secret mages organization with the mission to preserve humanity's future, foresaw mankind's extinction in 2015. Thus commenced the operation to repair the Singularities in history caused by Holy Grails dispersed across time and space—Operation Grand Order. \r\n\r\nUsing the Rayshift time travel technology, Chaldea's last master Ritsuka Fujimaru and his demi-servant Mash Kyrielight have traveled to and resolved six Singularities. Now, they depart for their most dangerous destination yet: a civilization in the Age of Gods, B.C. 2655 Mesopotamia. Ritsuka and Mash soon discover that Demonic Beasts roam the land, attacking people and towns. Amidst chaos and terror lies humanity's last defense—Uruk, a fortress city that acts as the frontline for the battle against the beasts. The battlefront is commanded by none other than King Gilgamesh, the King of Heroes, who sought aid from Heroic Spirits and took on the role of a mage to protect his city. \r\n\r\nAlong with Gilgamesh and the summoned servants, Ritsuka and Mash must protect Uruk against the magical beasts' onslaught and defeat the Three Goddess Alliance who aims to eradicate humankind; all the while, a greater threat looms over Uruk, preparing for its awakening.\r\n\r\n[Written by MAL Rewrite]",
    "type": "TV",
    "airing_start": "2019-10-05T14:30:00+00:00",
    "episodes": 21,
    "members": 65888,
    "genres": [
      {
        "mal_id": 1,
        "type": "anime",
        "name": "Action",
        "url": "https://myanimelist.net/anime/genre/1/Action"
      },
      {
        "mal_id": 10,
        "type": "anime",
        "name": "Fantasy",
        "url": "https://myanimelist.net/anime/genre/10/Fantasy"
      },
      {
        "mal_id": 16,
        "type": "anime",
        "name": "Magic",
        "url": "https://myanimelist.net/anime/genre/16/Magic"
      },
      {
        "mal_id": 37,
        "type": "anime",
        "name": "Supernatural",
        "url": "https://myanimelist.net/anime/genre/37/Supernatural"
      }
    ],
    "source": "Game",
    "producers": [
      {
        "mal_id": 1835,
        "type": "anime",
        "name": "CloverWorks",
        "url": "https://myanimelist.net/anime/producer/1835/CloverWorks"
      }
    ],
    "score": 7.95,
    "licensors": [
      "Aniplex of America"
    ],
    "r18": false,
    "kids": false,
    "continuing": false
  },
  {
    "mal_id": 39195,
    "url": "https://myanimelist.net/anime/39195/Beastars",
    "title": "Beastars",
    "image_url": "https://cdn.myanimelist.net/images/anime/1234/102008.jpg?s=8b0b47f4893cc31151d7f1cfaa1ec3f6",
    "synopsis": "In a world populated by anthropomorphic animals, herbivores and carnivores coexist. For the adolescences of Cherryton Academy, school life is filled with hope, romance, distrust, and uneasiness.\r\n\r\nThe main character is Legoshi the wolf, a member of the drama club. Despite his menacing appearance, he has a very gentle heart. Throughout most of his life, he has always been an object to be feared and hated by other animals, and he has become quite accustomed to that lifestyle. But following the murder of a classmate, he finds himself becoming more involved with his other peers, who have their own share of insecurities, and finds his life in school changing slowly.\r\n\r\n(Source: Batoto; edited)",
    "type": "TV",
    "airing_start": "2019-10-09T15:55:00+00:00",
    "episodes": null,
    "members": 63061,
    "genres": [
      {
        "mal_id": 8,
        "type": "anime",
        "name": "Drama",
        "url": "https://myanimelist.net/anime/genre/8/Drama"
      },
      {
        "mal_id": 40,
        "type": "anime",
        "name": "Psychological",
        "url": "https://myanimelist.net/anime/genre/40/Psychological"
      },
      {
        "mal_id": 27,
        "type": "anime",
        "name": "Shounen",
        "url": "https://myanimelist.net/anime/genre/27/Shounen"
      },
      {
        "mal_id": 36,
        "type": "anime",
        "name": "Slice of Life",
        "url": "https://myanimelist.net/anime/genre/36/Slice_of_Life"
      }
    ],
    "source": "Manga",
    "producers": [
      {
        "mal_id": 1109,
        "type": "anime",
        "name": "Orange",
        "url": "https://myanimelist.net/anime/producer/1109/Orange"
      }
    ],
    "score": 8.02,
    "licensors": [],
    "r18": false,
    "kids": false,
    "continuing": false
  },
  {
    "mal_id": 39030,
    "url": "https://myanimelist.net/anime/39030/Hataage_Kemono_Michi",
    "title": "Hataage! Kemono Michi",
    "image_url": "https://cdn.myanimelist.net/images/anime/1736/103512.jpg?s=e4f2d2373aa7fca58efbb481dac7c04d",
    "synopsis": "Professional wrestler and animal lover Shibata Genzo is suddenly summoned to another world. Greeted by a princess, she requests to get rid of the evil beasts roaming in this world. Outraged that he was asked to kill monsters, Genzo German suplexes the princess. Unable to get back to Earth, he decides to live a peaceful life and manage a \"monster\" pet shop.\r\n\r\n(Source: MU, edited)",
    "type": "TV",
    "airing_start": "2019-10-02T13:00:00+00:00",
    "episodes": 12,
    "members": 60913,
    "genres": [
      {
        "mal_id": 4,
        "type": "anime",
        "name": "Comedy",
        "url": "https://myanimelist.net/anime/genre/4/Comedy"
      },
      {
        "mal_id": 10,
        "type": "anime",
        "name": "Fantasy",
        "url": "https://myanimelist.net/anime/genre/10/Fantasy"
      },
      {
        "mal_id": 27,
        "type": "anime",
        "name": "Shounen",
        "url": "https://myanimelist.net/anime/genre/27/Shounen"
      }
    ],
    "source": "Manga",
    "producers": [
      {
        "mal_id": 1974,
        "type": "anime",
        "name": "ENGI",
        "url": "https://myanimelist.net/anime/producer/1974/ENGI"
      }
    ],
    "score": 7.18,
    "licensors": [],
    "r18": false,
    "kids": false,
    "continuing": false
  },
  {
    "mal_id": 40004,
    "url": "https://myanimelist.net/anime/40004/Bokutachi_wa_Benkyou_ga_Dekinai",
    "title": "Bokutachi wa Benkyou ga Dekinai!",
    "image_url": "https://cdn.myanimelist.net/images/anime/1974/102960.jpg?s=06d7a30ef22831a7900deaaf45f209cc",
    "synopsis": "Under Nariyuki Yuiga's devoted tutelage, his classmates Rizu Ogata, Fumino Furuhashi, and Uruka Takemoto are finally pulling average test scores on their worst subjects. But time is ticking, and there is still a long way to go before the three geniuses of Ichinose Academy are ready for their upcoming university exams. Meanwhile, the girls still struggle to balance the pursuit of their dreams with their growing affections for their unsuspecting tutor.\r\n\r\nJoining them are Mafuyu Kirisu, a teacher with strong views about education and talent because of her past as a rising figure skater, and Asumi Kominami, a graduate from their school aiming to attend a national medical university. With these two additions, the group of six is livelier than ever before. Completely caught up in hilarious antics with his new friends, Yuiga finds that his last year of high school now includes a lot more than just going to class and studying.\r\n\r\n[Written by MAL Rewrite]",
    "type": "TV",
    "airing_start": "2019-10-05T15:30:00+00:00",
    "episodes": 13,
    "members": 60203,
    "genres": [
      {
        "mal_id": 4,
        "type": "anime",
        "name": "Comedy",
        "url": "https://myanimelist.net/anime/genre/4/Comedy"
      },
      {
        "mal_id": 35,
        "type": "anime",
        "name": "Harem",
        "url": "https://myanimelist.net/anime/genre/35/Harem"
      },
      {
        "mal_id": 22,
        "type": "anime",
        "name": "Romance",
        "url": "https://myanimelist.net/anime/genre/22/Romance"
      },
      {
        "mal_id": 23,
        "type": "anime",
        "name": "School",
        "url": "https://myanimelist.net/anime/genre/23/School"
      },
      {
        "mal_id": 27,
        "type": "anime",
        "name": "Shounen",
        "url": "https://myanimelist.net/anime/genre/27/Shounen"
      }
    ],
    "source": "Manga",
    "producers": [
      {
        "mal_id": 1874,
        "type": "anime",
        "name": "Arvo Animation",
        "url": "https://myanimelist.net/anime/producer/1874/Arvo_Animation"
      },
      {
        "mal_id": 1873,
        "type": "anime",
        "name": "Silver",
        "url": "https://myanimelist.net/anime/producer/1873/Silver"
      }
    ],
    "score": 7.66,
    "licensors": [],
    "r18": false,
    "kids": false,
    "continuing": false
  },
  {
    "mal_id": 39523,
    "url": "https://myanimelist.net/anime/39523/Choujin_Koukousei-tachi_wa_Isekai_demo_Yoyuu_de_Ikinuku_you_desu",
    "title": "Choujin Koukousei-tachi wa Isekai demo Yoyuu de Ikinuku you desu!",
    "image_url": "https://cdn.myanimelist.net/images/anime/1859/103422.jpg?s=1a3c19ebf05e5db99edd4584df4615f8",
    "synopsis": "Seven Japanese high school students enjoy international renown for their remarkable talents. One day, these friends survive a plane crash only to find themselves in the medieval fantasy world of Freyjagard, where two human races live side by side in a feudal society: the byuma, who have animal features and formidable strength, and the hyuma, who have a small chance of magical aptitude. After being rescued by the byuma Winona and her adopted elven daughter Riruru, the group pledges to use their advanced skills and knowledge to pay the people of Elm Village back for their hospitality and find a way to return back home.\r\n\r\nTsukasa Mikogami, the prime minister of Japan, acts as the leader of these young geniuses and organizes their efforts to intervene in Freyjagard and gather the information and resources necessary for achieving their goals. Believing that there is a connection between their current situation and an ancient legend about seven heroes from another world who defeated an evil dragon, Tsukasa directs the others to learn about the culture around them and search for any clues leading them back to Earth. But he also gives another instruction: to take it nice and easy, lest they ruin this world by giving it their all.\r\n\r\n[Written by MAL Rewrite]",
    "type": "TV",
    "airing_start": "2019-10-03T12:00:00+00:00",
    "episodes": 12,
    "members": 57665,
    "genres": [
      {
        "mal_id": 10,
        "type": "anime",
        "name": "Fantasy",
        "url": "https://myanimelist.net/anime/genre/10/Fantasy"
      }
    ],
    "source": "Light novel",
    "producers": [
      {
        "mal_id": 439,
        "type": "anime",
        "name": "Project No.9",
        "url": "https://myanimelist.net/anime/producer/439/Project_No9"
      }
    ],
    "score": 6.58,
    "licensors": [],
    "r18": false,
    "kids": false,
    "continuing": false
  },
  {
    "mal_id": 38328,
    "url": "https://myanimelist.net/anime/38328/Azur_Lane",
    "title": "Azur Lane",
    "image_url": "https://cdn.myanimelist.net/images/anime/1957/102383.jpg?s=e998bd66fb8f4be9fc5473a04b29a2d3",
    "synopsis": "Grotesque, strong enemies called \"Siren\" have suddenly appeared from the sea. In order to fight against them, a navy group called Azure Lane has formed. They were successful in stopping the attack from Siren for a moment using warships. The different ideals from the people who formed it have shown. The story is about girls fighting the strong enemies that they've never faced before while dealing with the trouble in each camp. \r\n\r\n(Source: MAL News)",
    "type": "TV",
    "airing_start": "2019-10-03T14:30:00+00:00",
    "episodes": 12,
    "members": 54667,
    "genres": [
      {
        "mal_id": 1,
        "type": "anime",
        "name": "Action",
        "url": "https://myanimelist.net/anime/genre/1/Action"
      },
      {
        "mal_id": 38,
        "type": "anime",
        "name": "Military",
        "url": "https://myanimelist.net/anime/genre/38/Military"
      },
      {
        "mal_id": 13,
        "type": "anime",
        "name": "Historical",
        "url": "https://myanimelist.net/anime/genre/13/Historical"
      }
    ],
    "source": "Game",
    "producers": [
      {
        "mal_id": 1722,
        "type": "anime",
        "name": "Bibury Animation Studios",
        "url": "https://myanimelist.net/anime/producer/1722/Bibury_Animation_Studios"
      }
    ],
    "score": 6.74,
    "licensors": [],
    "r18": false,
    "kids": false,
    "continuing": false
  },
  {
    "mal_id": 37403,
    "url": "https://myanimelist.net/anime/37403/Ahiru_no_Sora",
    "title": "Ahiru no Sora",
    "image_url": "https://cdn.myanimelist.net/images/anime/1505/102719.jpg?s=18b3a6dd386245af42ddf7b62a978385",
    "synopsis": "Lacking what is considered the most important asset in basketball, Sora Kurumatani has struggled with his short height since the inception of his love for the game. Despite missing this beneficial aspect, Sora's unwavering drive never allowed his small stature to dictate his ability to play, believing strongly in trying his hardest and persistently practicing to prove his capability.\r\n\r\nIn hopes of satisfying his mother's wishes, Sora enters Kuzuryuu High School to become a member of the basketball club and compete wholeheartedly in tournaments. However, Sora is disappointed to find out that the boy's basketball team is nothing but a retreat for punks who have no interest in the sport. Sora also comes to learn that brothers Chiaki and Momoharu Hanazono—whom he becomes acquainted with—have also lost their once spirited motivation to play. \r\n\r\nDetermined to revive the basketball team, Sora challenges the boys to a match against him, where his quick feet and swift movements overwhelm the group. Gradually affected by Sora's impressive skills, sheer effort, and tireless devotion to basketball, the boys unexpectedly find their burnt-out passion for the game rekindling once again.\r\n\r\n[Written by MAL Rewrite]",
    "type": "TV",
    "airing_start": "2019-10-02T09:25:00+00:00",
    "episodes": 50,
    "members": 48654,
    "genres": [
      {
        "mal_id": 8,
        "type": "anime",
        "name": "Drama",
        "url": "https://myanimelist.net/anime/genre/8/Drama"
      },
      {
        "mal_id": 23,
        "type": "anime",
        "name": "School",
        "url": "https://myanimelist.net/anime/genre/23/School"
      },
      {
        "mal_id": 27,
        "type": "anime",
        "name": "Shounen",
        "url": "https://myanimelist.net/anime/genre/27/Shounen"
      },
      {
        "mal_id": 30,
        "type": "anime",
        "name": "Sports",
        "url": "https://myanimelist.net/anime/genre/30/Sports"
      }
    ],
    "source": "Manga",
    "producers": [
      {
        "mal_id": 51,
        "type": "anime",
        "name": "Diomedea",
        "url": "https://myanimelist.net/anime/producer/51/Diomedea"
      }
    ],
    "score": 7.61,
    "licensors": [
      "Sentai Filmworks"
    ],
    "r18": false,
    "kids": false,
    "continuing": false
  },
  {
    "mal_id": 37525,
    "url": "https://myanimelist.net/anime/37525/Babylon",
    "title": "Babylon",
    "image_url": "https://cdn.myanimelist.net/images/anime/1942/102707.jpg?s=853bf36fff54caa166b2c313232d62c1",
    "synopsis": "In the newly formed Shiniki district of Tokyo, Zen Seizaki is a diligent public prosecutor at the Tokyo District Public Prosecutors Office. Assigned to a case involving false advertisement, Zen—along with his assistant officer, Atsuhiko Fumio—investigate Japan Supiri, a pharmaceutical company that had provided fabricated clinical research on the company's new drug. While investigating the file of Shin Inaba, an anesthesiologist connected to the crime, the case takes a dark turn when Zen finds a page stained with a mixture of blood, hair and skin, along with the letter \"F\" scribbled all across the sheet. As he investigates further, the case goes beyond Zen's imagination and becomes vastly complex, challenging his sense of justice and his knowledge of the truth. \r\n\r\nDigging deeper into the investigation, Zen begins to uncover a concealed plot behind the ongoing mayoral election and ties to many people of interest involved in the election and those closer than he thinks. The case grows more severe and propels Zen into an unforeseen hurricane of corruption and deceit behind the election, the establishment of the Shiniki district, and the mysterious woman associated with it all. \r\n\r\n[Written by MAL Rewrite]",
    "type": "TV",
    "airing_start": "2019-10-07T13:00:00+00:00",
    "episodes": 12,
    "members": 45687,
    "genres": [
      {
        "mal_id": 7,
        "type": "anime",
        "name": "Mystery",
        "url": "https://myanimelist.net/anime/genre/7/Mystery"
      },
      {
        "mal_id": 41,
        "type": "anime",
        "name": "Thriller",
        "url": "https://myanimelist.net/anime/genre/41/Thriller"
      }
    ],
    "source": "Novel",
    "producers": [
      {
        "mal_id": 1692,
        "type": "anime",
        "name": "Revoroot",
        "url": "https://myanimelist.net/anime/producer/1692/Revoroot"
      }
    ],
    "score": 7.66,
    "licensors": [],
    "r18": false,
    "kids": false,
    "continuing": false
  },
  {
    "mal_id": 38161,
    "url": "https://myanimelist.net/anime/38161/Kabukichou_Sherlock",
    "title": "Kabukichou Sherlock",
    "image_url": "https://cdn.myanimelist.net/images/anime/1934/102099.jpg?s=720c1d8738ad632a0d2a0d0e7249ffcb",
    "synopsis": "Shinjuku ward east side... The center of the street with most chaos, There's a Kabukicho with full of neon lights. When the light is stronger, the shadow is deeper. The story begins when certain bizarre murder happens one night! Suspense? Or Comedy? Drama that cannot identify begins!\r\n\r\n(Source: MAL News)",
    "type": "TV",
    "airing_start": "2019-10-11T16:55:00+00:00",
    "episodes": 24,
    "members": 44244,
    "genres": [
      {
        "mal_id": 7,
        "type": "anime",
        "name": "Mystery",
        "url": "https://myanimelist.net/anime/genre/7/Mystery"
      },
      {
        "mal_id": 4,
        "type": "anime",
        "name": "Comedy",
        "url": "https://myanimelist.net/anime/genre/4/Comedy"
      },
      {
        "mal_id": 8,
        "type": "anime",
        "name": "Drama",
        "url": "https://myanimelist.net/anime/genre/8/Drama"
      }
    ],
    "source": "Original",
    "producers": [
      {
        "mal_id": 10,
        "type": "anime",
        "name": "Production I.G",
        "url": "https://myanimelist.net/anime/producer/10/Production_IG"
      }
    ],
    "score": 6.65,
    "licensors": [],
    "r18": false,
    "kids": false,
    "continuing": false
  },
  {
    "mal_id": 39196,
    "url": "https://myanimelist.net/anime/39196/Mairimashita_Iruma-kun",
    "title": "Mairimashita! Iruma-kun",
    "image_url": "https://cdn.myanimelist.net/images/anime/1009/103187.jpg?s=b86c0c8dfa468eb2278ffa834085c148",
    "synopsis": "Suzuki Iruma has been sold to the demon by his irresponsible parents in exchange for money. Surprisingly, next thing he knows, he is living with the demon and has been transferred into a school in the Demon World...\r\n\r\n(Source: MU)",
    "type": "TV",
    "airing_start": "2019-10-05T08:35:00+00:00",
    "episodes": 23,
    "members": 43049,
    "genres": [
      {
        "mal_id": 4,
        "type": "anime",
        "name": "Comedy",
        "url": "https://myanimelist.net/anime/genre/4/Comedy"
      },
      {
        "mal_id": 6,
        "type": "anime",
        "name": "Demons",
        "url": "https://myanimelist.net/anime/genre/6/Demons"
      },
      {
        "mal_id": 37,
        "type": "anime",
        "name": "Supernatural",
        "url": "https://myanimelist.net/anime/genre/37/Supernatural"
      },
      {
        "mal_id": 10,
        "type": "anime",
        "name": "Fantasy",
        "url": "https://myanimelist.net/anime/genre/10/Fantasy"
      },
      {
        "mal_id": 27,
        "type": "anime",
        "name": "Shounen",
        "url": "https://myanimelist.net/anime/genre/27/Shounen"
      }
    ],
    "source": "Manga",
    "producers": [
      {
        "mal_id": 1258,
        "type": "anime",
        "name": "Bandai Namco Pictures",
        "url": "https://myanimelist.net/anime/producer/1258/Bandai_Namco_Pictures"
      }
    ],
    "score": 7.55,
    "licensors": [],
    "r18": false,
    "kids": false,
    "continuing": false
  },
  {
    "mal_id": 37393,
    "url": "https://myanimelist.net/anime/37393/Watashi_Nouryoku_wa_Heikinchi_de_tte_Itta_yo_ne",
    "title": "Watashi, Nouryoku wa Heikinchi de tte Itta yo ne!",
    "image_url": "https://cdn.myanimelist.net/images/anime/1858/102811.jpg?s=56d144cf46be1b2f4ae4a58560380af2",
    "synopsis": "Having stood out from others most of her life due to her exceptional character, Misato Kurihara has lived without neither the joy of having close friends nor the experience of having a regular life. However, after a sudden death, she was transported to a divine realm to be reincarnated—and granted one wish to top it off. Thinking about the ordinary life that she had always wanted, she wished to be born as a normal person, with abilities that are average for the world she will resurrect in.\r\n\r\nReborn as Adele von Ascham—the daughter of a noble—she possesses magic powers completely exceeding what one would label average. Still desiring to carry out the life she wanted, she leaves her home and enrolls at a hunter school in a faraway kingdom using \"Mile\" as an alias. However, try as she might to hide her overpowering potential, attaining her goal will be difficult—especially when facing against the crazy situations that ensue!\r\n\r\n[Written by MAL Rewrite]",
    "type": "TV",
    "airing_start": "2019-10-07T14:30:00+00:00",
    "episodes": 12,
    "members": 37417,
    "genres": [
      {
        "mal_id": 4,
        "type": "anime",
        "name": "Comedy",
        "url": "https://myanimelist.net/anime/genre/4/Comedy"
      },
      {
        "mal_id": 10,
        "type": "anime",
        "name": "Fantasy",
        "url": "https://myanimelist.net/anime/genre/10/Fantasy"
      }
    ],
    "source": "Light novel",
    "producers": [
      {
        "mal_id": 439,
        "type": "anime",
        "name": "Project No.9",
        "url": "https://myanimelist.net/anime/producer/439/Project_No9"
      }
    ],
    "score": 6.99,
    "licensors": [],
    "r18": false,
    "kids": false,
    "continuing": false
  },
  {
    "mal_id": 37379,
    "url": "https://myanimelist.net/anime/37379/Chihayafuru_3",
    "title": "Chihayafuru 3",
    "image_url": "https://cdn.myanimelist.net/images/anime/1590/102068.jpg?s=63a34d4d19dca3a5f06221fe14b50ebb",
    "synopsis": "Winning the high school team tournament was a great accomplishment for the Mizusawa members. Each of them has made great strides in improving themselves, and the victory symbolizes how far they've come. But after accomplishing one goal, their individual aims are within reach. Chihaya Ayase has her sights set on Wakamiya Shinobu and the title of Queen, and now that Taichi Mashima has made it into Class A, he can finally compete against Arata Wataya. Everyone in Mizusawa wants to get better, and there's no telling what the future holds if they keep trying.\r\n\r\n[Written by MAL Rewrite]",
    "type": "TV",
    "airing_start": "2019-10-22T16:29:00+00:00",
    "episodes": 24,
    "members": 37307,
    "genres": [
      {
        "mal_id": 8,
        "type": "anime",
        "name": "Drama",
        "url": "https://myanimelist.net/anime/genre/8/Drama"
      },
      {
        "mal_id": 11,
        "type": "anime",
        "name": "Game",
        "url": "https://myanimelist.net/anime/genre/11/Game"
      },
      {
        "mal_id": 43,
        "type": "anime",
        "name": "Josei",
        "url": "https://myanimelist.net/anime/genre/43/Josei"
      },
      {
        "mal_id": 23,
        "type": "anime",
        "name": "School",
        "url": "https://myanimelist.net/anime/genre/23/School"
      },
      {
        "mal_id": 36,
        "type": "anime",
        "name": "Slice of Life",
        "url": "https://myanimelist.net/anime/genre/36/Slice_of_Life"
      },
      {
        "mal_id": 30,
        "type": "anime",
        "name": "Sports",
        "url": "https://myanimelist.net/anime/genre/30/Sports"
      }
    ],
    "source": "Manga",
    "producers": [
      {
        "mal_id": 11,
        "type": "anime",
        "name": "Madhouse",
        "url": "https://myanimelist.net/anime/producer/11/Madhouse"
      }
    ],
    "score": 8.54,
    "licensors": [],
    "r18": false,
    "kids": false,
    "continuing": false
  },
  {
    "mal_id": 37972,
    "url": "https://myanimelist.net/anime/37972/Hoshiai_no_Sora",
    "title": "Hoshiai no Sora",
    "image_url": "https://cdn.myanimelist.net/images/anime/1807/103081.jpg?s=371ffdcd1cd810625136ef3b9b47f39b",
    "synopsis": "Constantly outperformed by the girls' club, the boys' soft tennis club faces disbandment due to their poor skills and lack of positive results in matches. In desperate need of members, Toma Shinjou is looking to recruit capable players, but he fails to scout anyone. Enter Maki Katsuragi, a new transfer student who demonstrates great reflexes when he catches a stray cat in his classroom, instantly capturing Toma's attention. With his interest piqued, Toma ambitiously asks Maki to join the boys' team but is quickly rejected, as Maki doesn't wish to join any clubs. Toma refuses to back down and ends up persuading Maki—only under the condition that Toma will pay him for his participation and cover other club expenses. \r\n\r\nAs Maki joins the team, his incredible form and quick learning allow him to immediately outshine the rest of the team. Although this gives rise to conflict among the boys, Maki challenges and pushes his fellow team members to not only keep up with his seemingly natural talent, but also drive them to devote themselves to the game they once neglected. \r\n\r\nThis story focuses on the potential of the boys' soft tennis club and their discovery of their own capability, while also enduring personal hardships and dealing with the darker side of growing up in middle school.\r\n\r\n[Written by MAL Rewrite]",
    "type": "TV",
    "airing_start": "2019-10-10T16:58:00+00:00",
    "episodes": 12,
    "members": 33765,
    "genres": [
      {
        "mal_id": 8,
        "type": "anime",
        "name": "Drama",
        "url": "https://myanimelist.net/anime/genre/8/Drama"
      },
      {
        "mal_id": 23,
        "type": "anime",
        "name": "School",
        "url": "https://myanimelist.net/anime/genre/23/School"
      },
      {
        "mal_id": 36,
        "type": "anime",
        "name": "Slice of Life",
        "url": "https://myanimelist.net/anime/genre/36/Slice_of_Life"
      },
      {
        "mal_id": 30,
        "type": "anime",
        "name": "Sports",
        "url": "https://myanimelist.net/anime/genre/30/Sports"
      }
    ],
    "source": "Original",
    "producers": [
      {
        "mal_id": 441,
        "type": "anime",
        "name": "8bit",
        "url": "https://myanimelist.net/anime/producer/441/8bit"
      }
    ],
    "score": 7.89,
    "licensors": [],
    "r18": false,
    "kids": false,
    "continuing": false
  },
  {
    "mal_id": 39468,
    "url": "https://myanimelist.net/anime/39468/Honzuki_no_Gekokujou__Shisho_ni_Naru_Tame_ni_wa_Shudan_wo_Erandeiraremasen",
    "title": "Honzuki no Gekokujou: Shisho ni Naru Tame ni wa Shudan wo Erandeiraremasen",
    "image_url": "https://cdn.myanimelist.net/images/anime/1582/101697.jpg?s=57132b35b149f8e7019d60ea5c771490",
    "synopsis": "Urano Motosu loves books and has an endless desire to read literature, no matter the subject. She almost fulfills her dream job of becoming a librarian before her life is ended in an accident. As she draws her last breath, she wishes to be able to read more books in her next life.\r\n\r\nAs if fate was listening to her prayer, she wakes up reincarnated as Maine—a frail five-year-old girl living in a medieval era. What immediately comes to her mind is her passion. She tries to find something to read, only to become frustrated by the lack of books at her disposal.  \r\n\r\nWithout the printing press, books have to be written and copied by hand, making them very expensive; as such, only a few nobles can afford them—but this won't stop Maine. She will prove that her will to read is unbreakable, and if there are no books around, she will make them herself! \r\n\r\n[Written by MAL Rewrite]",
    "type": "TV",
    "airing_start": "2019-10-02T15:30:00+00:00",
    "episodes": 14,
    "members": 30599,
    "genres": [
      {
        "mal_id": 10,
        "type": "anime",
        "name": "Fantasy",
        "url": "https://myanimelist.net/anime/genre/10/Fantasy"
      },
      {
        "mal_id": 36,
        "type": "anime",
        "name": "Slice of Life",
        "url": "https://myanimelist.net/anime/genre/36/Slice_of_Life"
      }
    ],
    "source": "Light novel",
    "producers": [
      {
        "mal_id": 30,
        "type": "anime",
        "name": "Ajia-Do",
        "url": "https://myanimelist.net/anime/producer/30/Ajia-Do"
      }
    ],
    "score": 7.17,
    "licensors": [],
    "r18": false,
    "kids": false,
    "continuing": false
  },
  {
    "mal_id": 36587,
    "url": "https://myanimelist.net/anime/36587/Granblue_Fantasy_The_Animation_Season_2",
    "title": "Granblue Fantasy The Animation Season 2",
    "image_url": "https://cdn.myanimelist.net/images/anime/1948/103308.jpg?s=ac64d548ed64f9b3fe5aeca7831efa51",
    "synopsis": "Second season of Granblue Fantasy The Animation.",
    "type": "TV",
    "airing_start": "2019-10-04T15:00:00+00:00",
    "episodes": 13,
    "members": 27587,
    "genres": [
      {
        "mal_id": 2,
        "type": "anime",
        "name": "Adventure",
        "url": "https://myanimelist.net/anime/genre/2/Adventure"
      },
      {
        "mal_id": 10,
        "type": "anime",
        "name": "Fantasy",
        "url": "https://myanimelist.net/anime/genre/10/Fantasy"
      }
    ],
    "source": "Game",
    "producers": [
      {
        "mal_id": 569,
        "type": "anime",
        "name": "MAPPA",
        "url": "https://myanimelist.net/anime/producer/569/MAPPA"
      }
    ],
    "score": 7.13,
    "licensors": [],
    "r18": false,
    "kids": false,
    "continuing": false
  },
  {
    "mal_id": 39799,
    "url": "https://myanimelist.net/anime/39799/Val_x_Love",
    "title": "Val x Love",
    "image_url": "https://cdn.myanimelist.net/images/anime/1238/102067.jpg?s=9aab01ffb5f3400594dead41f54bb4b6",
    "synopsis": "High-schooler Akutsu Takuma has learned to accept his lonely lot in life and is content surrounded by his studies, but when the god Odin taps him to save the world alongside nine Valkyries fueled by intimacy, Takuma can say good-bye to his solitary existence!\r\n\r\n(Source: ANN)",
    "type": "TV",
    "airing_start": "2019-10-05T14:00:00+00:00",
    "episodes": 12,
    "members": 27539,
    "genres": [
      {
        "mal_id": 35,
        "type": "anime",
        "name": "Harem",
        "url": "https://myanimelist.net/anime/genre/35/Harem"
      },
      {
        "mal_id": 4,
        "type": "anime",
        "name": "Comedy",
        "url": "https://myanimelist.net/anime/genre/4/Comedy"
      },
      {
        "mal_id": 37,
        "type": "anime",
        "name": "Supernatural",
        "url": "https://myanimelist.net/anime/genre/37/Supernatural"
      },
      {
        "mal_id": 22,
        "type": "anime",
        "name": "Romance",
        "url": "https://myanimelist.net/anime/genre/22/Romance"
      },
      {
        "mal_id": 9,
        "type": "anime",
        "name": "Ecchi",
        "url": "https://myanimelist.net/anime/genre/9/Ecchi"
      },
      {
        "mal_id": 23,
        "type": "anime",
        "name": "School",
        "url": "https://myanimelist.net/anime/genre/23/School"
      },
      {
        "mal_id": 27,
        "type": "anime",
        "name": "Shounen",
        "url": "https://myanimelist.net/anime/genre/27/Shounen"
      }
    ],
    "source": "Manga",
    "producers": [
      {
        "mal_id": 346,
        "type": "anime",
        "name": "Hoods Entertainment",
        "url": "https://myanimelist.net/anime/producer/346/Hoods_Entertainment"
      }
    ],
    "score": 5.68,
    "licensors": [
      "Sentai Filmworks"
    ],
    "r18": false,
    "kids": false,
    "continuing": false
  },
  {
    "mal_id": 39570,
    "url": "https://myanimelist.net/anime/39570/High_Score_Girl_II",
    "title": "High Score Girl II",
    "image_url": "https://cdn.myanimelist.net/images/anime/1560/99904.jpg?s=37694fa95a5e92af8810d2c214632e42",
    "synopsis": "Second season of High Score Girl.",
    "type": "TV",
    "airing_start": "2019-10-25T16:05:00+00:00",
    "episodes": 9,
    "members": 26547,
    "genres": [
      {
        "mal_id": 11,
        "type": "anime",
        "name": "Game",
        "url": "https://myanimelist.net/anime/genre/11/Game"
      },
      {
        "mal_id": 4,
        "type": "anime",
        "name": "Comedy",
        "url": "https://myanimelist.net/anime/genre/4/Comedy"
      },
      {
        "mal_id": 22,
        "type": "anime",
        "name": "Romance",
        "url": "https://myanimelist.net/anime/genre/22/Romance"
      },
      {
        "mal_id": 23,
        "type": "anime",
        "name": "School",
        "url": "https://myanimelist.net/anime/genre/23/School"
      },
      {
        "mal_id": 42,
        "type": "anime",
        "name": "Seinen",
        "url": "https://myanimelist.net/anime/genre/42/Seinen"
      }
    ],
    "source": "Manga",
    "producers": [
      {
        "mal_id": 7,
        "type": "anime",
        "name": "J.C.Staff",
        "url": "https://myanimelist.net/anime/producer/7/JCStaff"
      }
    ],
    "score": 8.01,
    "licensors": [],
    "r18": false,
    "kids": false,
    "continuing": false
  },
  {
    "mal_id": 39355,
    "url": "https://myanimelist.net/anime/39355/Radiant_2nd_Season",
    "title": "Radiant 2nd Season",
    "image_url": "https://cdn.myanimelist.net/images/anime/1391/102816.jpg?s=ccaa51e71156f637dd6052faaa40bd4b",
    "synopsis": "Second season of Radiant.",
    "type": "TV",
    "airing_start": "2019-10-02T10:25:00+00:00",
    "episodes": 21,
    "members": 25462,
    "genres": [
      {
        "mal_id": 1,
        "type": "anime",
        "name": "Action",
        "url": "https://myanimelist.net/anime/genre/1/Action"
      },
      {
        "mal_id": 2,
        "type": "anime",
        "name": "Adventure",
        "url": "https://myanimelist.net/anime/genre/2/Adventure"
      },
      {
        "mal_id": 16,
        "type": "anime",
        "name": "Magic",
        "url": "https://myanimelist.net/anime/genre/16/Magic"
      },
      {
        "mal_id": 10,
        "type": "anime",
        "name": "Fantasy",
        "url": "https://myanimelist.net/anime/genre/10/Fantasy"
      }
    ],
    "source": "Manga",
    "producers": [
      {
        "mal_id": 456,
        "type": "anime",
        "name": "Lerche",
        "url": "https://myanimelist.net/anime/producer/456/Lerche"
      }
    ],
    "score": 7.31,
    "licensors": [],
    "r18": false,
    "kids": false,
    "continuing": false
  },
  {
    "mal_id": 38889,
    "url": "https://myanimelist.net/anime/38889/Kono_Oto_Tomare_2nd_Season",
    "title": "Kono Oto Tomare! 2nd Season",
    "image_url": "https://cdn.myanimelist.net/images/anime/1547/103054.jpg?s=0377fcb2152b404d4ee56822edc24550",
    "synopsis": "The Tokise High School Koto Club has courageously pushed through their fractured and unsynchronized performance at the Kanto Region Traditional Japanese Music Festival. Clubmembers Chika Kudou, Satowa Houzuki, Takezou Kurata, Hiro Kurusu, Kouta Mizuhara, Saneyasu Adachi, and Michitaka Sakai are devastated to learn the negative results of their performance, leaving them crushed. Nonetheless, the group recognizes their potential and enthusiastically agree to collectively sharpen their skills, improve their flaws, and develop higher caliber playing to succeed in the upcoming national qualifiers in winter. \r\n\r\nWith the help of their now willing club advisor Suzuka Takinami, the group's goal gradually becomes achievable as they begin to grasp the foundations of good music and refine their koto-playing abilities, with the suggestion of performing more often to gain what they lack most—experience. \r\n\r\nHowever, as their journey to nationals is underway, the koto club members face challenges that obstruct their focus and progress. Not only does the threat of other powerhouse schools and musicians remain, but the high school issues of budding romance and soon-to-be-graduating seniors also begin to push the limits of the determined group of teenagers and the future of the koto club.\r\n\r\n[Written by MAL Rewrite]",
    "type": "TV",
    "airing_start": "2019-10-05T16:00:00+00:00",
    "episodes": 13,
    "members": 25139,
    "genres": [
      {
        "mal_id": 8,
        "type": "anime",
        "name": "Drama",
        "url": "https://myanimelist.net/anime/genre/8/Drama"
      },
      {
        "mal_id": 19,
        "type": "anime",
        "name": "Music",
        "url": "https://myanimelist.net/anime/genre/19/Music"
      },
      {
        "mal_id": 23,
        "type": "anime",
        "name": "School",
        "url": "https://myanimelist.net/anime/genre/23/School"
      },
      {
        "mal_id": 27,
        "type": "anime",
        "name": "Shounen",
        "url": "https://myanimelist.net/anime/genre/27/Shounen"
      }
    ],
    "source": "Manga",
    "producers": [
      {
        "mal_id": 1471,
        "type": "anime",
        "name": "Platinum Vision",
        "url": "https://myanimelist.net/anime/producer/1471/Platinum_Vision"
      }
    ],
    "score": 8.11,
    "licensors": [],
    "r18": false,
    "kids": false,
    "continuing": false
  },
  {
    "mal_id": 39567,
    "url": "https://myanimelist.net/anime/39567/Keishichou_Tokumubu_Tokushu_Kyouakuhan_Taisakushitsu_Dainanaka__Tokunana",
    "title": "Keishichou Tokumubu Tokushu Kyouakuhan Taisakushitsu Dainanaka: Tokunana",
    "image_url": "https://cdn.myanimelist.net/images/anime/1338/102486.jpg?s=b4106d39b1a8e88100a759aecdb7ab84",
    "synopsis": "In Tokyo, there exists a peaceful cohabitation between supernatural creatures—elves, dwarves, vampires, and more—and humans. However, contrary to history, powerful dragons once ruled over this world of creatures and humans but have since disappeared. Consequently, a diabolical group under the alias \"Nine,\" who seek the miracles of the once godlike dragons, stirs up trouble in the streets of Tokyo, commiting mass murder and causing destruction. To combat the dangerous group of Nine, the police organize the Special 7—a group of highly skilled professionals whose abilities exceed those of ordinary humans. \r\n\r\nCaught up in a bank robbery turned hostage crisis, Seiji Nanatsuki, having recently become a detective, has a chance encounter with Shiori Ichinose, a member of Special 7. Assisting with the resolution of the robbery, Seiji is recognized for his clear sense of justice and refreshing character, suddenly earning him a spot on the elite unit. \r\n\r\nAs he takes on new missions, Seiji finds that being a detective as part of Special 7 isn't the police work he expected, where working alongside a team of different species with special abilities and vibrant personalities brings unpredictability to his daily life and police work. While the everyday crime in Tokyo continues, Seiji and the Special 7 will fight not only to resolve special cases, but also obstruct the ill-intentioned plans of the merciless group of Nine.\r\n\r\n[Written by MAL Rewrite]",
    "type": "TV",
    "airing_start": "2019-10-06T12:00:00+00:00",
    "episodes": 12,
    "members": 23149,
    "genres": [
      {
        "mal_id": 1,
        "type": "anime",
        "name": "Action",
        "url": "https://myanimelist.net/anime/genre/1/Action"
      },
      {
        "mal_id": 10,
        "type": "anime",
        "name": "Fantasy",
        "url": "https://myanimelist.net/anime/genre/10/Fantasy"
      },
      {
        "mal_id": 39,
        "type": "anime",
        "name": "Police",
        "url": "https://myanimelist.net/anime/genre/39/Police"
      },
      {
        "mal_id": 32,
        "type": "anime",
        "name": "Vampire",
        "url": "https://myanimelist.net/anime/genre/32/Vampire"
      }
    ],
    "source": "Original",
    "producers": [
      {
        "mal_id": 1983,
        "type": "anime",
        "name": "Anima&Co.",
        "url": "https://myanimelist.net/anime/producer/1983/Anima_Co"
      }
    ],
    "score": 6.31,
    "licensors": [],
    "r18": false,
    "kids": false,
    "continuing": false
  },
  {
    "mal_id": 39811,
    "url": "https://myanimelist.net/anime/39811/Fairy_Gone_2nd_Season",
    "title": "Fairy Gone 2nd Season",
    "image_url": "https://cdn.myanimelist.net/images/anime/1490/102941.jpg?s=e50df34994983843afd09be55f1b7879",
    "synopsis": "Second season of Fairy Gone.",
    "type": "TV",
    "airing_start": "2019-10-06T15:00:00+00:00",
    "episodes": 12,
    "members": 19342,
    "genres": [
      {
        "mal_id": 1,
        "type": "anime",
        "name": "Action",
        "url": "https://myanimelist.net/anime/genre/1/Action"
      },
      {
        "mal_id": 6,
        "type": "anime",
        "name": "Demons",
        "url": "https://myanimelist.net/anime/genre/6/Demons"
      },
      {
        "mal_id": 37,
        "type": "anime",
        "name": "Supernatural",
        "url": "https://myanimelist.net/anime/genre/37/Supernatural"
      },
      {
        "mal_id": 16,
        "type": "anime",
        "name": "Magic",
        "url": "https://myanimelist.net/anime/genre/16/Magic"
      },
      {
        "mal_id": 10,
        "type": "anime",
        "name": "Fantasy",
        "url": "https://myanimelist.net/anime/genre/10/Fantasy"
      }
    ],
    "source": "Original",
    "producers": [
      {
        "mal_id": 132,
        "type": "anime",
        "name": "P.A. Works",
        "url": "https://myanimelist.net/anime/producer/132/PA_Works"
      }
    ],
    "score": 6.62,
    "licensors": [],
    "r18": false,
    "kids": false,
    "continuing": false
  },
  {
    "mal_id": 38276,
    "url": "https://myanimelist.net/anime/38276/Houkago_Saikoro_Club",
    "title": "Houkago Saikoro Club",
    "image_url": "https://cdn.myanimelist.net/images/anime/1757/102526.jpg?s=4880111172371b265e6462b3e976128f",
    "synopsis": "A story about girls playing board games after school!\r\n\r\nKyoto in Spring. Aya is a high school girl who's just moved to a new town. Miki is her shy classmate, and her first friend. One day after school Aya and Miki follow the committee president Midori to a speciality board games store. The Dice Club!! Without thinking they try out a German board game together.\r\n\r\nThese girls, who are searching for fun, soon fall into the exciting world of games!",
    "type": "TV",
    "airing_start": "2019-10-02T16:15:00+00:00",
    "episodes": 12,
    "members": 18903,
    "genres": [
      {
        "mal_id": 11,
        "type": "anime",
        "name": "Game",
        "url": "https://myanimelist.net/anime/genre/11/Game"
      },
      {
        "mal_id": 4,
        "type": "anime",
        "name": "Comedy",
        "url": "https://myanimelist.net/anime/genre/4/Comedy"
      },
      {
        "mal_id": 23,
        "type": "anime",
        "name": "School",
        "url": "https://myanimelist.net/anime/genre/23/School"
      },
      {
        "mal_id": 27,
        "type": "anime",
        "name": "Shounen",
        "url": "https://myanimelist.net/anime/genre/27/Shounen"
      }
    ],
    "source": "Manga",
    "producers": [
      {
        "mal_id": 839,
        "type": "anime",
        "name": "LIDENFILMS",
        "url": "https://myanimelist.net/anime/producer/839/LIDENFILMS"
      }
    ],
    "score": 6.45,
    "licensors": [],
    "r18": false,
    "kids": false,
    "continuing": false
  },
  {
    "mal_id": 38390,
    "url": "https://myanimelist.net/anime/38390/Chuubyou_Gekihatsu_Boy",
    "title": "Chuubyou Gekihatsu Boy",
    "image_url": "https://cdn.myanimelist.net/images/anime/1326/102173.jpg?s=de5105f3d9e77a2e0688b6629a6ea79f",
    "synopsis": "When Mizuki Hijiri transferred to a new school, all she wanted was to live a normal school life, but that did not prove to be the case when she met the infamous Hero Club. All of its members are boys suffering from various types of chuunibyou—Yamato Noda is a righteous hero, using his athletic abilities to perform noble deeds and protect others; Kazuhiro Nakamura claims to be the reincarnation of \"Touga Ryushouin,\" the result of the forbidden union between a demon and an angel; Tomoki Takashima is a pretty-boy otaku whose one true love is the 2D anime girl Sora; and Rei Tsukumo plays the role of a schemer, covertly pulling the strings.\r\n\r\nDragged along as the newest member of the Hero Club, tepid Hijiri can't obtain the normalcy that she desires. But even so, despite their various quirks, their bonds of friendship are real; Hijiri's life can only get more exciting when she joins in on their delusions of grandeur!\r\n\r\n[Written by MAL Rewrite]",
    "type": "TV",
    "airing_start": "2019-10-04T13:30:00+00:00",
    "episodes": 11,
    "members": 16763,
    "genres": [
      {
        "mal_id": 4,
        "type": "anime",
        "name": "Comedy",
        "url": "https://myanimelist.net/anime/genre/4/Comedy"
      },
      {
        "mal_id": 23,
        "type": "anime",
        "name": "School",
        "url": "https://myanimelist.net/anime/genre/23/School"
      }
    ],
    "source": "Novel",
    "producers": [
      {
        "mal_id": 37,
        "type": "anime",
        "name": "Studio Deen",
        "url": "https://myanimelist.net/anime/producer/37/Studio_Deen"
      }
    ],
    "score": 6.42,
    "licensors": [
      "Sentai Filmworks"
    ],
    "r18": false,
    "kids": false,
    "continuing": false
  },
  {
    "mal_id": 38529,
    "url": "https://myanimelist.net/anime/38529/Rifle_Is_Beautiful",
    "title": "Rifle Is Beautiful",
    "image_url": "https://cdn.myanimelist.net/images/anime/1874/100747.jpg?s=e669427b45667d72ab1e534de3e2ce34",
    "synopsis": "Kokura Hikari is a first-year high school girl who loves rifle shooting. She entered Chidori High School because it had a shooting club, but finds that the club had been disbanded. She had only one day to find enough members to reform the club, but luckily was able to find three other first-year girls who she had met at a competition in middle school.\r\n\r\nThus begins the daily activities of the Chidori High Shooting Club.\r\n\r\n(Source: Wikipedia)",
    "type": "TV",
    "airing_start": "2019-10-13T14:00:00+00:00",
    "episodes": 12,
    "members": 13837,
    "genres": [
      {
        "mal_id": 36,
        "type": "anime",
        "name": "Slice of Life",
        "url": "https://myanimelist.net/anime/genre/36/Slice_of_Life"
      },
      {
        "mal_id": 4,
        "type": "anime",
        "name": "Comedy",
        "url": "https://myanimelist.net/anime/genre/4/Comedy"
      },
      {
        "mal_id": 23,
        "type": "anime",
        "name": "School",
        "url": "https://myanimelist.net/anime/genre/23/School"
      }
    ],
    "source": "4-koma manga",
    "producers": [
      {
        "mal_id": 1127,
        "type": "anime",
        "name": "Studio 3Hz",
        "url": "https://myanimelist.net/anime/producer/1127/Studio_3Hz"
      }
    ],
    "score": 5.74,
    "licensors": [
      "Sentai Filmworks"
    ],
    "r18": false,
    "kids": false,
    "continuing": false
  },
  {
    "mal_id": 40196,
    "url": "https://myanimelist.net/anime/40196/Kandagawa_Jet_Girls",
    "title": "Kandagawa Jet Girls",
    "image_url": "https://cdn.myanimelist.net/images/anime/1570/103129.jpg?s=c33fc377d5bff90c0e0cae579e7c0c60",
    "synopsis": "The project centers on several teams of girls who compete in jet ski races in pairs.\r\n\r\n(Source: ANN, edited)",
    "type": "TV",
    "airing_start": "2019-10-08T14:30:00+00:00",
    "episodes": 12,
    "members": 12542,
    "genres": [
      {
        "mal_id": 30,
        "type": "anime",
        "name": "Sports",
        "url": "https://myanimelist.net/anime/genre/30/Sports"
      },
      {
        "mal_id": 9,
        "type": "anime",
        "name": "Ecchi",
        "url": "https://myanimelist.net/anime/genre/9/Ecchi"
      }
    ],
    "source": "Original",
    "producers": [
      {
        "mal_id": 120,
        "type": "anime",
        "name": "TNK",
        "url": "https://myanimelist.net/anime/producer/120/TNK"
      }
    ],
    "score": 5.8,
    "licensors": [
      "Sentai Filmworks"
    ],
    "r18": false,
    "kids": false,
    "continuing": false
  },
  {
    "mal_id": 40254,
    "url": "https://myanimelist.net/anime/40254/XL_Joushi",
    "title": "XL Joushi.",
    "image_url": "https://cdn.myanimelist.net/images/anime/1456/102604.jpg?s=2c6ef1436fffb7e08f8b1e2299798ed4",
    "synopsis": "Running short of money, office lady Saki Watase is introduced to a part-time job where she's tasked with reviewing XL-size condoms. While receiving an escort home after a night of drinking, Saki's \"demon\" boss Keisuke Sudou notices that she's carrying a large quantity of condom. Once Saki explains her circumstances, Keisuke reveals that he is XL-size. A romance between the two thus begins.\r\n\r\n(Source: MAL News)\r\n\r\nNote: The standard TV version of the anime will debut on October 7 at 1:00 a.m. on Tokyo MX, as well as YouTube and Niconico. A complete version will begin streaming the same day on the ComicFesta Anime website.\r\n\r\nThis entry reflects standard TV version of the anime.",
    "type": "TV",
    "airing_start": "2019-10-06T16:00:00+00:00",
    "episodes": 8,
    "members": 10823,
    "genres": [
      {
        "mal_id": 22,
        "type": "anime",
        "name": "Romance",
        "url": "https://myanimelist.net/anime/genre/22/Romance"
      },
      {
        "mal_id": 9,
        "type": "anime",
        "name": "Ecchi",
        "url": "https://myanimelist.net/anime/genre/9/Ecchi"
      },
      {
        "mal_id": 43,
        "type": "anime",
        "name": "Josei",
        "url": "https://myanimelist.net/anime/genre/43/Josei"
      }
    ],
    "source": "Manga",
    "producers": [
      {
        "mal_id": 207,
        "type": "anime",
        "name": "Magic Bus",
        "url": "https://myanimelist.net/anime/producer/207/Magic_Bus"
      }
    ],
    "score": 5.8,
    "licensors": [],
    "r18": false,
    "kids": false,
    "continuing": false
  },
  {
    "mal_id": 39590,
    "url": "https://myanimelist.net/anime/39590/Africa_no_Salaryman_TV",
    "title": "Africa no Salaryman (TV)",
    "image_url": "https://cdn.myanimelist.net/images/anime/1937/102309.jpg?s=bfe8052698f85dc8c37ab8b644570690",
    "synopsis": "The comedy follows a lion, toucan, and lizard as they live the lives of office workers in a capitalist society in Japan, while also dealing with their unique situations as animals living beyond the savanna and the food chain.\r\n \r\n(Source: ANN)",
    "type": "TV",
    "airing_start": "2019-10-06T15:30:00+00:00",
    "episodes": 12,
    "members": 10333,
    "genres": [
      {
        "mal_id": 36,
        "type": "anime",
        "name": "Slice of Life",
        "url": "https://myanimelist.net/anime/genre/36/Slice_of_Life"
      },
      {
        "mal_id": 4,
        "type": "anime",
        "name": "Comedy",
        "url": "https://myanimelist.net/anime/genre/4/Comedy"
      }
    ],
    "source": "Web manga",
    "producers": [
      {
        "mal_id": 1972,
        "type": "anime",
        "name": "HOTZIPANG",
        "url": "https://myanimelist.net/anime/producer/1972/HOTZIPANG"
      }
    ],
    "score": 6.06,
    "licensors": [],
    "r18": false,
    "kids": false,
    "continuing": false
  },
  {
    "mal_id": 38331,
    "url": "https://myanimelist.net/anime/38331/Stand_My_Heroes__Piece_of_Truth",
    "title": "Stand My Heroes: Piece of Truth",
    "image_url": "https://cdn.myanimelist.net/images/anime/1042/101018.jpg?s=af20334fbb8eb9f74f4f92fcd9408644",
    "synopsis": "Drugs have become the center of conflict in Japan, and crime involving them has been increasing at an alarming rate. Unable to control the chaos, the police department settled on creating a unit—STAND—that would include unique, specialized experts and professionals better suited to handle the pressing issue. \r\n\r\nRei Izumi is a novice joining the narcotics investigation unit, assigned the daunting task of recruiting the potential representatives of STAND. While recommended for her moral sense of justice and devotion to police work, Rei also has a unique aspect of her own that may have earned her the job—she has an immunity to many, if not most, kinds of drugs. \r\n\r\nEager to seek the possible members of STAND, Rei quickly learns that scouting the different individuals will be more difficult than she expected, as each candidate harbors their own feelings, ideologies, and willingness toward joining the team and regulating drugs as a whole. Her capability as a narcotics officer is also questioned by the many colorful personalities she meets, stirring conflict and unpredictability in Rei's daily life. However, persuading the various contenders for STAND isn't the only obstacle she faces, as becoming involved in the treacherous underworld of drugs, overflowing with deceit and secrecy, will be more hazardous than she ever imagined.\r\n\r\n[Written by MAL Rewrite]",
    "type": "TV",
    "airing_start": "2019-10-07T14:00:00+00:00",
    "episodes": 12,
    "members": 10193,
    "genres": [
      {
        "mal_id": 43,
        "type": "anime",
        "name": "Josei",
        "url": "https://myanimelist.net/anime/genre/43/Josei"
      },
      {
        "mal_id": 7,
        "type": "anime",
        "name": "Mystery",
        "url": "https://myanimelist.net/anime/genre/7/Mystery"
      },
      {
        "mal_id": 22,
        "type": "anime",
        "name": "Romance",
        "url": "https://myanimelist.net/anime/genre/22/Romance"
      }
    ],
    "source": "Game",
    "producers": [
      {
        "mal_id": 463,
        "type": "anime",
        "name": "M.S.C",
        "url": "https://myanimelist.net/anime/producer/463/MSC"
      }
    ],
    "score": 5.24,
    "licensors": [],
    "r18": false,
    "kids": false,
    "continuing": false
  },
  {
    "mal_id": 39506,
    "url": "https://myanimelist.net/anime/39506/Phantasy_Star_Online_2__Episode_Oracle",
    "title": "Phantasy Star Online 2: Episode Oracle",
    "image_url": "https://cdn.myanimelist.net/images/anime/1923/99744.jpg?s=98eea999fc5ec9bf6c9efa6cdf4e59eb",
    "synopsis": "A TV anime adaptation of episode 1-3 out of 5 the total episodes from the Phantasy Star Online 2 game. Some anime-original content will be created as well.\r\n\r\nEpisode 1: During their qualification exam in planet Naberius, the player and fellow ARKS trainee Afin were attacked by vile organisms known as Darkers. This is followed by the two discovering a mysterious girl who lost most of her memories, and the truth regarding Naberius and the recent spike of Darker activities. \r\n\r\nEpisode 2: The plot follows the player and Matoi as they try to unravel a dark conspiracy regarding the origin and purpose of ARKS.\r\n\r\nEpisode 3: The discovery of the planet Harukotan brought a new quest into the fray, as the peace between the Shironian and Kuronites that dwell in the planet is disturbed by the Kuronites' sudden attack. The newly-reformed ARKS is tasked to investigate the reason behind it all, and it seems like the truth is more complicated and horrifying than expected... \r\n\r\n(Source: phantasystar.fandom.com) ",
    "type": "TV",
    "airing_start": "2019-10-07T13:30:00+00:00",
    "episodes": 25,
    "members": 9775,
    "genres": [
      {
        "mal_id": 1,
        "type": "anime",
        "name": "Action",
        "url": "https://myanimelist.net/anime/genre/1/Action"
      },
      {
        "mal_id": 24,
        "type": "anime",
        "name": "Sci-Fi",
        "url": "https://myanimelist.net/anime/genre/24/Sci-Fi"
      },
      {
        "mal_id": 29,
        "type": "anime",
        "name": "Space",
        "url": "https://myanimelist.net/anime/genre/29/Space"
      }
    ],
    "source": "Game",
    "producers": [
      {
        "mal_id": 3,
        "type": "anime",
        "name": "Gonzo",
        "url": "https://myanimelist.net/anime/producer/3/Gonzo"
      }
    ],
    "score": 6.62,
    "licensors": [],
    "r18": false,
    "kids": false,
    "continuing": false
  },
  {
    "mal_id": 39959,
    "url": "https://myanimelist.net/anime/39959/Ani_ni_Tsukeru_Kusuri_wa_Nai_3",
    "title": "Ani ni Tsukeru Kusuri wa Nai! 3",
    "image_url": "https://cdn.myanimelist.net/images/anime/1756/103441.jpg?s=00a8fa8e91819fd605894b839202306e",
    "synopsis": "Third season of Ani ni Tsukeru Kusuri wa Nai!.",
    "type": "TV",
    "airing_start": "2019-10-06T15:00:00+00:00",
    "episodes": null,
    "members": 7669,
    "genres": [
      {
        "mal_id": 36,
        "type": "anime",
        "name": "Slice of Life",
        "url": "https://myanimelist.net/anime/genre/36/Slice_of_Life"
      },
      {
        "mal_id": 4,
        "type": "anime",
        "name": "Comedy",
        "url": "https://myanimelist.net/anime/genre/4/Comedy"
      },
      {
        "mal_id": 23,
        "type": "anime",
        "name": "School",
        "url": "https://myanimelist.net/anime/genre/23/School"
      }
    ],
    "source": "Web manga",
    "producers": [],
    "score": 7.52,
    "licensors": [],
    "r18": false,
    "kids": false,
    "continuing": false
  },
  {
    "mal_id": 40351,
    "url": "https://myanimelist.net/anime/40351/Pokemon_2019",
    "title": "Pokemon (2019)",
    "image_url": "https://cdn.myanimelist.net/images/anime/1311/103286.jpg?s=2c8d8ce45d406e62f44685f5ddc0e953",
    "synopsis": "The official YouTube channel for the Pokemon franchise announced on Sunday that the franchise is getting a new television anime series titled Pocket Monster. The title is the same title as the original 1997 Pokemon television anime series. \r\n\r\nThe new series will feature all of the regions covered in the franchise so far, from the Kanto to the Galar region. The episode of Pokemon Sun & Moon that will air on September 29 will reveal more information about the new show.\r\n\r\n(Source: ANN)",
    "type": "TV",
    "airing_start": "2019-11-17T09:00:00+00:00",
    "episodes": null,
    "members": 6961,
    "genres": [
      {
        "mal_id": 1,
        "type": "anime",
        "name": "Action",
        "url": "https://myanimelist.net/anime/genre/1/Action"
      },
      {
        "mal_id": 2,
        "type": "anime",
        "name": "Adventure",
        "url": "https://myanimelist.net/anime/genre/2/Adventure"
      },
      {
        "mal_id": 4,
        "type": "anime",
        "name": "Comedy",
        "url": "https://myanimelist.net/anime/genre/4/Comedy"
      },
      {
        "mal_id": 15,
        "type": "anime",
        "name": "Kids",
        "url": "https://myanimelist.net/anime/genre/15/Kids"
      },
      {
        "mal_id": 10,
        "type": "anime",
        "name": "Fantasy",
        "url": "https://myanimelist.net/anime/genre/10/Fantasy"
      }
    ],
    "source": "Game",
    "producers": [
      {
        "mal_id": 28,
        "type": "anime",
        "name": "OLM",
        "url": "https://myanimelist.net/anime/producer/28/OLM"
      }
    ],
    "score": null,
    "licensors": [],
    "r18": false,
    "kids": true,
    "continuing": false
  },
  {
    "mal_id": 37268,
    "url": "https://myanimelist.net/anime/37268/Z_X__Code_Reunion",
    "title": "Z/X: Code Reunion",
    "image_url": "https://cdn.myanimelist.net/images/anime/1790/103216.jpg?s=82246227e3d0f96a8d1d92a3cf12294d",
    "synopsis": "(No synopsis yet.)",
    "type": "TV",
    "airing_start": "2019-10-08T14:00:00+00:00",
    "episodes": 12,
    "members": 6954,
    "genres": [
      {
        "mal_id": 24,
        "type": "anime",
        "name": "Sci-Fi",
        "url": "https://myanimelist.net/anime/genre/24/Sci-Fi"
      },
      {
        "mal_id": 10,
        "type": "anime",
        "name": "Fantasy",
        "url": "https://myanimelist.net/anime/genre/10/Fantasy"
      },
      {
        "mal_id": 23,
        "type": "anime",
        "name": "School",
        "url": "https://myanimelist.net/anime/genre/23/School"
      },
      {
        "mal_id": 27,
        "type": "anime",
        "name": "Shounen",
        "url": "https://myanimelist.net/anime/genre/27/Shounen"
      }
    ],
    "source": "Card game",
    "producers": [
      {
        "mal_id": 911,
        "type": "anime",
        "name": "Passione",
        "url": "https://myanimelist.net/anime/producer/911/Passione"
      }
    ],
    "score": 5.59,
    "licensors": [
      "Sentai Filmworks"
    ],
    "r18": false,
    "kids": false,
    "continuing": false
  },
  {
    "mal_id": 38670,
    "url": "https://myanimelist.net/anime/38670/Actors__Songs_Connection",
    "title": "Actors: Songs Connection",
    "image_url": "https://cdn.myanimelist.net/images/anime/1383/103339.jpg?s=0a35eeafd520a0665c8798da9a5f7b28",
    "synopsis": "Private Tenshou Gakuen is the seventh of ten school districts circled within a 130-meter tall wall with restricted entry and egress aside from officials. The academy is fully autonomous by the government but to strive for independence, the school allows students to engage in club activities after school, which comes with a strangely unique system. Each club is ranked according to its overall accumulated points gathered from various club activities and school events. Points can also be received by winning at the school's periodic Tenshou Gakuen Singing Contest, where many students compete. The members in the clubs work hard to win the contest for their goal.\r\n\r\n(Source: MAL News)",
    "type": "TV",
    "airing_start": "2019-10-06T14:30:00+00:00",
    "episodes": 12,
    "members": 5728,
    "genres": [
      {
        "mal_id": 19,
        "type": "anime",
        "name": "Music",
        "url": "https://myanimelist.net/anime/genre/19/Music"
      },
      {
        "mal_id": 23,
        "type": "anime",
        "name": "School",
        "url": "https://myanimelist.net/anime/genre/23/School"
      }
    ],
    "source": "Music",
    "producers": [
      {
        "mal_id": 1967,
        "type": "anime",
        "name": "Drive",
        "url": "https://myanimelist.net/anime/producer/1967/Drive"
      }
    ],
    "score": 5.99,
    "licensors": [],
    "r18": false,
    "kids": false,
    "continuing": false
  },
  {
    "mal_id": 39194,
    "url": "https://myanimelist.net/anime/39194/Shin_Chuuka_Ichiban",
    "title": "Shin Chuuka Ichiban!",
    "image_url": "https://cdn.myanimelist.net/images/anime/1781/100772.jpg?s=97668f43dc084a91c3e94de9010a4500",
    "synopsis": "After passing the Guangzhou Special Chef Trials, Mao decided to travel around China, to learn more about the unique preparation of food. Upon his return, he will learn that the real battle has only just begun. The Underground Cooking Society has already begun to move... \r\n\r\n(Source: MU)",
    "type": "TV",
    "airing_start": "2019-10-11T17:25:00+00:00",
    "episodes": null,
    "members": 4557,
    "genres": [
      {
        "mal_id": 4,
        "type": "anime",
        "name": "Comedy",
        "url": "https://myanimelist.net/anime/genre/4/Comedy"
      },
      {
        "mal_id": 27,
        "type": "anime",
        "name": "Shounen",
        "url": "https://myanimelist.net/anime/genre/27/Shounen"
      }
    ],
    "source": "Manga",
    "producers": [
      {
        "mal_id": 139,
        "type": "anime",
        "name": "Nihon Ad Systems",
        "url": "https://myanimelist.net/anime/producer/139/Nihon_Ad_Systems"
      },
      {
        "mal_id": 10,
        "type": "anime",
        "name": "Production I.G",
        "url": "https://myanimelist.net/anime/producer/10/Production_IG"
      }
    ],
    "score": 6.37,
    "licensors": [],
    "r18": false,
    "kids": false,
    "continuing": false
  },
  {
    "mal_id": 40228,
    "url": "https://myanimelist.net/anime/40228/Bananya__Fushigi_na_Nakama-tachi",
    "title": "Bananya: Fushigi na Nakama-tachi",
    "image_url": "https://cdn.myanimelist.net/images/anime/1449/102481.jpg?s=1b19c7215f614bf5454c649f428ca327",
    "synopsis": "On a little planet live little creatures called \"Bananyas.\" Come watch their daily lifes full of adventures and discoveries.",
    "type": "TV",
    "airing_start": "2019-09-30T22:30:00+00:00",
    "episodes": null,
    "members": 4432,
    "genres": [
      {
        "mal_id": 4,
        "type": "anime",
        "name": "Comedy",
        "url": "https://myanimelist.net/anime/genre/4/Comedy"
      },
      {
        "mal_id": 15,
        "type": "anime",
        "name": "Kids",
        "url": "https://myanimelist.net/anime/genre/15/Kids"
      },
      {
        "mal_id": 36,
        "type": "anime",
        "name": "Slice of Life",
        "url": "https://myanimelist.net/anime/genre/36/Slice_of_Life"
      }
    ],
    "source": "Original",
    "producers": [
      {
        "mal_id": 400,
        "type": "anime",
        "name": "Gathering",
        "url": "https://myanimelist.net/anime/producer/400/Gathering"
      },
      {
        "mal_id": 73,
        "type": "anime",
        "name": "TMS Entertainment",
        "url": "https://myanimelist.net/anime/producer/73/TMS_Entertainment"
      }
    ],
    "score": 6.67,
    "licensors": [],
    "r18": false,
    "kids": true,
    "continuing": false
  },
  {
    "mal_id": 40320,
    "url": "https://myanimelist.net/anime/40320/Tenka_Hyakken__Meiji-kan_e_Youkoso",
    "title": "Tenka Hyakken: Meiji-kan e Youkoso!",
    "image_url": "https://cdn.myanimelist.net/images/anime/1179/102821.jpg?s=ff49a2ec0df56675ad671c95630eecd5",
    "synopsis": "The Tenka Hyakken franchise centers around the \"Mitsurugi,\" maidens who are physical incarnations of ancient swords. They have pledged to live peaceful lives after the era of warfare, but are now returning to battle to fight a new foe that has arisen during an alternate version of the Meiji Era, three hundred years after the Battle of Sekigahara. \r\n\r\n(Source: ANN)",
    "type": "TV",
    "airing_start": "2019-10-13T13:54:00+00:00",
    "episodes": null,
    "members": 4281,
    "genres": [
      {
        "mal_id": 1,
        "type": "anime",
        "name": "Action",
        "url": "https://myanimelist.net/anime/genre/1/Action"
      },
      {
        "mal_id": 2,
        "type": "anime",
        "name": "Adventure",
        "url": "https://myanimelist.net/anime/genre/2/Adventure"
      },
      {
        "mal_id": 13,
        "type": "anime",
        "name": "Historical",
        "url": "https://myanimelist.net/anime/genre/13/Historical"
      },
      {
        "mal_id": 37,
        "type": "anime",
        "name": "Supernatural",
        "url": "https://myanimelist.net/anime/genre/37/Supernatural"
      },
      {
        "mal_id": 17,
        "type": "anime",
        "name": "Martial Arts",
        "url": "https://myanimelist.net/anime/genre/17/Martial_Arts"
      },
      {
        "mal_id": 10,
        "type": "anime",
        "name": "Fantasy",
        "url": "https://myanimelist.net/anime/genre/10/Fantasy"
      }
    ],
    "source": "Game",
    "producers": [
      {
        "mal_id": 839,
        "type": "anime",
        "name": "LIDENFILMS",
        "url": "https://myanimelist.net/anime/producer/839/LIDENFILMS"
      }
    ],
    "score": 4.99,
    "licensors": [],
    "r18": false,
    "kids": false,
    "continuing": false
  },
  {
    "mal_id": 40197,
    "url": "https://myanimelist.net/anime/40197/Urashimasakatasen_no_Nichijou",
    "title": "Urashimasakatasen no Nichijou",
    "image_url": "https://cdn.myanimelist.net/images/anime/1294/102367.jpg?s=409f130736dfeca058510cd0d353a66f",
    "synopsis": "The anime centers on the members of the real-world four-member male vocal unit Urashimasakatasen. Uratanuki, Shima, Tonari no Sakata, and Senra appear in the shorts as high school students.\r\n\r\n(Source: ANN)",
    "type": "TV",
    "airing_start": "2019-10-02T12:54:00+00:00",
    "episodes": null,
    "members": 2208,
    "genres": [
      {
        "mal_id": 36,
        "type": "anime",
        "name": "Slice of Life",
        "url": "https://myanimelist.net/anime/genre/36/Slice_of_Life"
      },
      {
        "mal_id": 4,
        "type": "anime",
        "name": "Comedy",
        "url": "https://myanimelist.net/anime/genre/4/Comedy"
      },
      {
        "mal_id": 23,
        "type": "anime",
        "name": "School",
        "url": "https://myanimelist.net/anime/genre/23/School"
      }
    ],
    "source": "Music",
    "producers": [
      {
        "mal_id": 1971,
        "type": "anime",
        "name": "Gainax Kyoto",
        "url": "https://myanimelist.net/anime/producer/1971/Gainax_Kyoto"
      }
    ],
    "score": 5.54,
    "licensors": [],
    "r18": false,
    "kids": false,
    "continuing": false
  },
  {
    "mal_id": 40266,
    "url": "https://myanimelist.net/anime/40266/Aikatsu_on_Parade",
    "title": "Aikatsu on Parade!",
    "image_url": "https://cdn.myanimelist.net/images/anime/1712/102652.jpg?s=a9f3b557d37b679827eae25c8c784508",
    "synopsis": "Raki Kiseki is a second-year middle school student who transfers to Star Harmony Academy to become an idol. However, when she uses an Aikatsu Pass she received from her big sister (an Aikatsu engineer), something mysterious happens. Lots of doors appeared before her, and when she opens them, she meets Aikatsu idols she never knew before, such as Yume Nijino (Aikatsu Stars!). Raki vows to design her own premium dress and perform in it on stage. \r\n\r\n(Source: Anime News Network)",
    "type": "TV",
    "airing_start": "2019-10-05T01:30:00+00:00",
    "episodes": null,
    "members": 1629,
    "genres": [
      {
        "mal_id": 19,
        "type": "anime",
        "name": "Music",
        "url": "https://myanimelist.net/anime/genre/19/Music"
      },
      {
        "mal_id": 36,
        "type": "anime",
        "name": "Slice of Life",
        "url": "https://myanimelist.net/anime/genre/36/Slice_of_Life"
      },
      {
        "mal_id": 23,
        "type": "anime",
        "name": "School",
        "url": "https://myanimelist.net/anime/genre/23/School"
      },
      {
        "mal_id": 25,
        "type": "anime",
        "name": "Shoujo",
        "url": "https://myanimelist.net/anime/genre/25/Shoujo"
      }
    ],
    "source": "Game",
    "producers": [
      {
        "mal_id": 1258,
        "type": "anime",
        "name": "Bandai Namco Pictures",
        "url": "https://myanimelist.net/anime/producer/1258/Bandai_Namco_Pictures"
      }
    ],
    "score": 6.93,
    "licensors": [],
    "r18": false,
    "kids": false,
    "continuing": false
  },
  {
    "mal_id": 39183,
    "url": "https://myanimelist.net/anime/39183/Super_Shiro",
    "title": "Super Shiro",
    "image_url": "https://cdn.myanimelist.net/images/anime/1555/103542.jpg?s=d52587cc0bc16b25f23e6d92f8c4233d",
    "synopsis": "Spin-off series of Crayon Shin-chan franchise, featuring Shiro.  Commemorates 60th Anniversary of TV Asahi.",
    "type": "TV",
    "airing_start": "2019-10-13T15:00:00+00:00",
    "episodes": 48,
    "members": 744,
    "genres": [
      {
        "mal_id": 15,
        "type": "anime",
        "name": "Kids",
        "url": "https://myanimelist.net/anime/genre/15/Kids"
      }
    ],
    "source": "-",
    "producers": [
      {
        "mal_id": 1591,
        "type": "anime",
        "name": "Science SARU",
        "url": "https://myanimelist.net/anime/producer/1591/Science_SARU"
      }
    ],
    "score": 6.23,
    "licensors": [],
    "r18": false,
    "kids": true,
    "continuing": false
  },
  {
    "mal_id": 40166,
    "url": "https://myanimelist.net/anime/40166/Zoids_Wild_Zero",
    "title": "Zoids Wild Zero",
    "image_url": "https://cdn.myanimelist.net/images/anime/1069/102621.jpg?s=e46c955eb56838f53308f904138b050c",
    "synopsis": "Sequel of Zoids Wild.",
    "type": "TV",
    "airing_start": "2019-10-04T08:55:00+00:00",
    "episodes": null,
    "members": 708,
    "genres": [
      {
        "mal_id": 1,
        "type": "anime",
        "name": "Action",
        "url": "https://myanimelist.net/anime/genre/1/Action"
      },
      {
        "mal_id": 24,
        "type": "anime",
        "name": "Sci-Fi",
        "url": "https://myanimelist.net/anime/genre/24/Sci-Fi"
      },
      {
        "mal_id": 2,
        "type": "anime",
        "name": "Adventure",
        "url": "https://myanimelist.net/anime/genre/2/Adventure"
      },
      {
        "mal_id": 4,
        "type": "anime",
        "name": "Comedy",
        "url": "https://myanimelist.net/anime/genre/4/Comedy"
      }
    ],
    "source": "Other",
    "producers": [
      {
        "mal_id": 28,
        "type": "anime",
        "name": "OLM",
        "url": "https://myanimelist.net/anime/producer/28/OLM"
      }
    ],
    "score": null,
    "licensors": [],
    "r18": false,
    "kids": false,
    "continuing": false
  },
  {
    "mal_id": 40420,
    "url": "https://myanimelist.net/anime/40420/Dorufuro__Iyashi-hen",
    "title": "Dorufuro: Iyashi-hen",
    "image_url": "https://cdn.myanimelist.net/images/anime/1510/103653.jpg?s=f08f1b2d38eb37f4561a0d6de46c7375",
    "synopsis": "Mini-series based on the Chinese app game Girls' Frontline.",
    "type": "TV",
    "airing_start": "2019-10-04T16:00:00+00:00",
    "episodes": null,
    "members": 334,
    "genres": [
      {
        "mal_id": 4,
        "type": "anime",
        "name": "Comedy",
        "url": "https://myanimelist.net/anime/genre/4/Comedy"
      }
    ],
    "source": "Game",
    "producers": [
      {
        "mal_id": 1980,
        "type": "anime",
        "name": "BigFireBird Animation",
        "url": "https://myanimelist.net/anime/producer/1980/BigFireBird_Animation"
      }
    ],
    "score": null,
    "licensors": [],
    "r18": false,
    "kids": false,
    "continuing": false
  },
  {
    "mal_id": 40367,
    "url": "https://myanimelist.net/anime/40367/Go_Go_Atom",
    "title": "Go! Go! Atom",
    "image_url": "https://cdn.myanimelist.net/images/anime/1197/102904.jpg?s=540a1c6e1477a2870a6be144ad6992ca",
    "synopsis": "The eco-systems of planet Earth are endangered. Lucky for us, a super-powered robot boy is flying to rescue! astro in on a mission to help anyone anywhere in the world with a problem involving natural phenomena. Go little Astro Boy! GO! \r\n\r\n(Source: ANN)",
    "type": "TV",
    "airing_start": "2019-10-03T09:10:00+00:00",
    "episodes": 52,
    "members": 239,
    "genres": [
      {
        "mal_id": 1,
        "type": "anime",
        "name": "Action",
        "url": "https://myanimelist.net/anime/genre/1/Action"
      },
      {
        "mal_id": 2,
        "type": "anime",
        "name": "Adventure",
        "url": "https://myanimelist.net/anime/genre/2/Adventure"
      },
      {
        "mal_id": 8,
        "type": "anime",
        "name": "Drama",
        "url": "https://myanimelist.net/anime/genre/8/Drama"
      },
      {
        "mal_id": 15,
        "type": "anime",
        "name": "Kids",
        "url": "https://myanimelist.net/anime/genre/15/Kids"
      },
      {
        "mal_id": 18,
        "type": "anime",
        "name": "Mecha",
        "url": "https://myanimelist.net/anime/genre/18/Mecha"
      },
      {
        "mal_id": 24,
        "type": "anime",
        "name": "Sci-Fi",
        "url": "https://myanimelist.net/anime/genre/24/Sci-Fi"
      }
    ],
    "source": "Manga",
    "producers": [],
    "score": null,
    "licensors": [],
    "r18": false,
    "kids": true,
    "continuing": false
  },
  {
    "mal_id": 40423,
    "url": "https://myanimelist.net/anime/40423/Taeko_no_Nichijou",
    "title": "Taeko no Nichijou",
    "image_url": "https://cdn.myanimelist.net/images/anime/1583/103149.jpg?s=a0003797bce2193237075affd72c5f9a",
    "synopsis": "A short anime about Taeko Shinbou who is an office worker that is patient with everything and greets everything that comes her way with cheer. An announcement was made that a \"regular person\" from Kantou will voice Taeko rather than an industry professional.\r\n\r\n(Source: ANN)",
    "type": "TV",
    "airing_start": "2019-10-04T15:00:00+00:00",
    "episodes": null,
    "members": 150,
    "genres": [
      {
        "mal_id": 36,
        "type": "anime",
        "name": "Slice of Life",
        "url": "https://myanimelist.net/anime/genre/36/Slice_of_Life"
      }
    ],
    "source": "Manga",
    "producers": [],
    "score": null,
    "licensors": [],
    "r18": false,
    "kids": false,
    "continuing": false
  },
  {
    "mal_id": 40487,
    "url": "https://myanimelist.net/anime/40487/Eily_wa_Ou-sama",
    "title": "Eily wa Ou-sama!",
    "image_url": "https://cdn.myanimelist.net/images/anime/1069/103379.jpg?s=085d2d8b34973e3871bdf3a781037f13",
    "synopsis": "(No synopsis yet.)",
    "type": "TV",
    "airing_start": "2019-10-07T15:00:00+00:00",
    "episodes": null,
    "members": 128,
    "genres": [
      {
        "mal_id": 4,
        "type": "anime",
        "name": "Comedy",
        "url": "https://myanimelist.net/anime/genre/4/Comedy"
      },
      {
        "mal_id": 10,
        "type": "anime",
        "name": "Fantasy",
        "url": "https://myanimelist.net/anime/genre/10/Fantasy"
      },
      {
        "mal_id": 16,
        "type": "anime",
        "name": "Magic",
        "url": "https://myanimelist.net/anime/genre/16/Magic"
      }
    ],
    "source": "Original",
    "producers": [],
    "score": null,
    "licensors": [],
    "r18": false,
    "kids": false,
    "continuing": false
  },
  {
    "mal_id": 39628,
    "url": "https://myanimelist.net/anime/39628/Kaijuu_Step_Wandabada",
    "title": "Kaijuu Step Wandabada",
    "image_url": "https://cdn.myanimelist.net/images/anime/1132/102644.jpg?s=b8007a92d84b6746a65404cacb455f79",
    "synopsis": "Anime based on the picture book Kaijuu Step, which features monsters from Ultraman series",
    "type": "TV",
    "airing_start": "2019-09-26T15:00:00+00:00",
    "episodes": 26,
    "members": 55,
    "genres": [
      {
        "mal_id": 4,
        "type": "anime",
        "name": "Comedy",
        "url": "https://myanimelist.net/anime/genre/4/Comedy"
      },
      {
        "mal_id": 15,
        "type": "anime",
        "name": "Kids",
        "url": "https://myanimelist.net/anime/genre/15/Kids"
      }
    ],
    "source": "Picture book",
    "producers": [
      {
        "mal_id": 472,
        "type": "anime",
        "name": "Usagi Ou",
        "url": "https://myanimelist.net/anime/producer/472/Usagi_Ou"
      }
    ],
    "score": null,
    "licensors": [],
    "r18": false,
    "kids": true,
    "continuing": false
  },
  {
    "mal_id": 40368,
    "url": "https://myanimelist.net/anime/40368/Egg_Car",
    "title": "Egg Car",
    "image_url": "https://cdn.myanimelist.net/images/anime/1750/102905.jpg?s=9705819b66a86421062e32b356789114",
    "synopsis": "(No synopsis yet.)",
    "type": "TV",
    "airing_start": "2019-10-03T09:10:00+00:00",
    "episodes": 52,
    "members": 53,
    "genres": [
      {
        "mal_id": 2,
        "type": "anime",
        "name": "Adventure",
        "url": "https://myanimelist.net/anime/genre/2/Adventure"
      },
      {
        "mal_id": 4,
        "type": "anime",
        "name": "Comedy",
        "url": "https://myanimelist.net/anime/genre/4/Comedy"
      },
      {
        "mal_id": 15,
        "type": "anime",
        "name": "Kids",
        "url": "https://myanimelist.net/anime/genre/15/Kids"
      },
      {
        "mal_id": 10,
        "type": "anime",
        "name": "Fantasy",
        "url": "https://myanimelist.net/anime/genre/10/Fantasy"
      }
    ],
    "source": "Original",
    "producers": [],
    "score": null,
    "licensors": [],
    "r18": false,
    "kids": true,
    "continuing": false
  },
  {
    "mal_id": 21,
    "url": "https://myanimelist.net/anime/21/One_Piece",
    "title": "One Piece",
    "image_url": "https://cdn.myanimelist.net/images/anime/6/73245.jpg?s=9e722fa5cb98491ab41aed2c14d8d137",
    "synopsis": "Gol D. Roger was known as the \"Pirate King,\" the strongest and most infamous being to have sailed the Grand Line. The capture and execution of Roger by the World Government brought a change throughout the world. His last words before his death revealed the existence of the greatest treasure in the world, One Piece. It was this revelation that brought about the Grand Age of Pirates, men who dreamed of finding One Piece—which promises an unlimited amount of riches and fame—and quite possibly the pinnacle of glory and the title of the Pirate King.\r\n\r\nEnter Monkey D. Luffy, a 17-year-old boy who defies your standard definition of a pirate. Rather than the popular persona of a wicked, hardened, toothless pirate ransacking villages for fun, Luffy’s reason for being a pirate is one of pure wonder: the thought of an exciting adventure that leads him to intriguing people and ultimately, the promised treasure. Following in the footsteps of his childhood hero, Luffy and his crew travel across the Grand Line, experiencing crazy adventures, unveiling dark mysteries and battling strong enemies, all in order to reach the most coveted of all fortunes—One Piece.\r\n\r\n[Written by MAL Rewrite] ",
    "type": "TV",
    "airing_start": "1999-10-20T00:30:00+00:00",
    "episodes": null,
    "members": 924702,
    "genres": [
      {
        "mal_id": 1,
        "type": "anime",
        "name": "Action",
        "url": "https://myanimelist.net/anime/genre/1/Action"
      },
      {
        "mal_id": 2,
        "type": "anime",
        "name": "Adventure",
        "url": "https://myanimelist.net/anime/genre/2/Adventure"
      },
      {
        "mal_id": 4,
        "type": "anime",
        "name": "Comedy",
        "url": "https://myanimelist.net/anime/genre/4/Comedy"
      },
      {
        "mal_id": 31,
        "type": "anime",
        "name": "Super Power",
        "url": "https://myanimelist.net/anime/genre/31/Super_Power"
      },
      {
        "mal_id": 8,
        "type": "anime",
        "name": "Drama",
        "url": "https://myanimelist.net/anime/genre/8/Drama"
      },
      {
        "mal_id": 10,
        "type": "anime",
        "name": "Fantasy",
        "url": "https://myanimelist.net/anime/genre/10/Fantasy"
      },
      {
        "mal_id": 27,
        "type": "anime",
        "name": "Shounen",
        "url": "https://myanimelist.net/anime/genre/27/Shounen"
      }
    ],
    "source": "Manga",
    "producers": [
      {
        "mal_id": 18,
        "type": "anime",
        "name": "Toei Animation",
        "url": "https://myanimelist.net/anime/producer/18/Toei_Animation"
      }
    ],
    "score": 8.53,
    "licensors": [
      "4Kids Entertainment",
      "Funimation"
    ],
    "r18": false,
    "kids": false,
    "continuing": true
  },
  {
    "mal_id": 34572,
    "url": "https://myanimelist.net/anime/34572/Black_Clover",
    "title": "Black Clover",
    "image_url": "https://cdn.myanimelist.net/images/anime/2/88336.jpg?s=c4290d1b8f2947f6efe8496cff7d07ed",
    "synopsis": "Asta and Yuno were abandoned at the same church on the same day. Raised together as children, they came to know of the \"Wizard King\"—a title given to the strongest mage in the kingdom—and promised that they would compete against each other for the position of the next Wizard King. However, as they grew up, the stark difference between them became evident. While Yuno is able to wield magic with amazing power and control, Asta cannot use magic at all and desperately tries to awaken his powers by training physically.\r\n\r\nWhen they reach the age of 15, Yuno is bestowed a spectacular Grimoire with a four-leaf clover, while Asta receives nothing. However, soon after, Yuno is attacked by a person named Lebuty, whose main purpose is to obtain Yuno's Grimoire. Asta tries to fight Lebuty, but he is outmatched. Though without hope and on the brink of defeat, he finds the strength to continue when he hears Yuno's voice. Unleashing his inner emotions in a rage, Asta receives a five-leaf clover Grimoire, a \"Black Clover\" giving him enough power to defeat Lebuty. A few days later, the two friends head out into the world, both seeking the same goal—to become the Wizard King!\r\n\r\n[Written by MAL Rewrite]",
    "type": "TV",
    "airing_start": "2017-10-03T09:25:00+00:00",
    "episodes": null,
    "members": 434213,
    "genres": [
      {
        "mal_id": 1,
        "type": "anime",
        "name": "Action",
        "url": "https://myanimelist.net/anime/genre/1/Action"
      },
      {
        "mal_id": 4,
        "type": "anime",
        "name": "Comedy",
        "url": "https://myanimelist.net/anime/genre/4/Comedy"
      },
      {
        "mal_id": 16,
        "type": "anime",
        "name": "Magic",
        "url": "https://myanimelist.net/anime/genre/16/Magic"
      },
      {
        "mal_id": 10,
        "type": "anime",
        "name": "Fantasy",
        "url": "https://myanimelist.net/anime/genre/10/Fantasy"
      },
      {
        "mal_id": 27,
        "type": "anime",
        "name": "Shounen",
        "url": "https://myanimelist.net/anime/genre/27/Shounen"
      }
    ],
    "source": "Manga",
    "producers": [
      {
        "mal_id": 1,
        "type": "anime",
        "name": "Studio Pierrot",
        "url": "https://myanimelist.net/anime/producer/1/Studio_Pierrot"
      }
    ],
    "score": 7.15,
    "licensors": [
      "Funimation"
    ],
    "r18": false,
    "kids": false,
    "continuing": true
  },
  {
    "mal_id": 38691,
    "url": "https://myanimelist.net/anime/38691/Dr_Stone",
    "title": "Dr. Stone",
    "image_url": "https://cdn.myanimelist.net/images/anime/1613/102576.jpg?s=d9ea17cce357c77ad471a91f6255abca",
    "synopsis": "After five years of harboring unspoken feelings, high-schooler Taiju Ooki is finally ready to confess his love to Yuzuriha Ogawa. Just when Taiju begins his confession however, a blinding green light strikes the Earth and petrifies mankind around the world— turning every single human into stone. \r\n\r\nSeveral millennia later, Taiju awakens to find the modern world completely nonexistent, as nature has flourished in the years humanity stood still. Among a stone world of statues, Taiju encounters one other living human: his science-loving friend Senkuu, who has been active for a few months. Taiju learns that Senkuu has developed a grand scheme—to launch the complete revival of civilization with science. Taiju's brawn and Senkuu's brains combine to forge a formidable partnership, and they soon uncover a method to revive those petrified. \r\n\r\nHowever, Senkuu's master plan is threatened when his ideologies are challenged by those who awaken. All the while, the reason for mankind's petrification remains unknown.\r\n\r\n[Written by MAL Rewrite]",
    "type": "TV",
    "airing_start": "2019-07-05T13:00:00+00:00",
    "episodes": 24,
    "members": 361974,
    "genres": [
      {
        "mal_id": 24,
        "type": "anime",
        "name": "Sci-Fi",
        "url": "https://myanimelist.net/anime/genre/24/Sci-Fi"
      },
      {
        "mal_id": 2,
        "type": "anime",
        "name": "Adventure",
        "url": "https://myanimelist.net/anime/genre/2/Adventure"
      },
      {
        "mal_id": 27,
        "type": "anime",
        "name": "Shounen",
        "url": "https://myanimelist.net/anime/genre/27/Shounen"
      }
    ],
    "source": "Manga",
    "producers": [
      {
        "mal_id": 73,
        "type": "anime",
        "name": "TMS Entertainment",
        "url": "https://myanimelist.net/anime/producer/73/TMS_Entertainment"
      }
    ],
    "score": 8.27,
    "licensors": [
      "Crunchyroll",
      "Funimation"
    ],
    "r18": false,
    "kids": false,
    "continuing": true
  },
  {
    "mal_id": 34566,
    "url": "https://myanimelist.net/anime/34566/Boruto__Naruto_Next_Generations",
    "title": "Boruto: Naruto Next Generations",
    "image_url": "https://cdn.myanimelist.net/images/anime/9/84460.jpg?s=f60b689eb4593f0a22a337619b5665ea",
    "synopsis": "Following the successful end of the Fourth Shinobi World War, Konohagakure has been enjoying a period of peace, prosperity, and extraordinary technological advancement. This is all due to the efforts of the Allied Shinobi Forces and the village's Seventh Hokage, Naruto Uzumaki. Now resembling a modern metropolis, Konohagakure has changed, particularly the life of a shinobi. Under the watchful eye of Naruto and his old comrades, a new generation of shinobi has stepped up to learn the ways of the ninja.\r\n\r\nBoruto Uzumaki is often the center of attention as the son of the Seventh Hokage. Despite having inherited Naruto's boisterous and stubborn demeanor, Boruto is considered a prodigy and is able to unleash his potential with the help of supportive friends and family. Unfortunately, this has only worsened his arrogance and his desire to surpass Naruto which, along with his father's busy lifestyle, has strained their relationship. However, a sinister force brewing within the village may threaten Boruto's carefree life.\r\n\r\nNew friends and familiar faces join Boruto as a new story begins in Boruto: Naruto Next Generations.\r\n\r\n[Written by MAL Rewrite]",
    "type": "TV",
    "airing_start": "2017-04-05T08:30:00+00:00",
    "episodes": null,
    "members": 326784,
    "genres": [
      {
        "mal_id": 1,
        "type": "anime",
        "name": "Action",
        "url": "https://myanimelist.net/anime/genre/1/Action"
      },
      {
        "mal_id": 2,
        "type": "anime",
        "name": "Adventure",
        "url": "https://myanimelist.net/anime/genre/2/Adventure"
      },
      {
        "mal_id": 17,
        "type": "anime",
        "name": "Martial Arts",
        "url": "https://myanimelist.net/anime/genre/17/Martial_Arts"
      },
      {
        "mal_id": 27,
        "type": "anime",
        "name": "Shounen",
        "url": "https://myanimelist.net/anime/genre/27/Shounen"
      },
      {
        "mal_id": 31,
        "type": "anime",
        "name": "Super Power",
        "url": "https://myanimelist.net/anime/genre/31/Super_Power"
      }
    ],
    "source": "Manga",
    "producers": [
      {
        "mal_id": 1,
        "type": "anime",
        "name": "Studio Pierrot",
        "url": "https://myanimelist.net/anime/producer/1/Studio_Pierrot"
      }
    ],
    "score": 6.45,
    "licensors": [
      "Viz Media"
    ],
    "r18": false,
    "kids": false,
    "continuing": true
  },
  {
    "mal_id": 38671,
    "url": "https://myanimelist.net/anime/38671/Enen_no_Shouboutai",
    "title": "Enen no Shouboutai",
    "image_url": "https://cdn.myanimelist.net/images/anime/1664/103275.jpg?s=d525cd203accd5f9c40c0c592e0a2c4e",
    "synopsis": "Spontaneous Human Combustion: a chaotic phenomenon that has plagued humanity for years, randomly transforming ordinary people into flaming, violent creatures known as Infernals. While Infernals make up the first-generation accounts of Human Combustion, the second and third generations became known as pyrokinetics—people gifted with the ability to manipulate and control their flames while remaining human. To combat the Infernal threat and discover the cause, the Tokyo Armed Forces, Fire Defense Agency, and Holy Church of Sol produced their answer: the Special Fire Force.\r\n\r\nYoung and eager third-generation pyrokinetic Shinra Kusakabe, nicknamed Devil's Footprints for his explosive ability to ignite his feet at will, becomes a member of the lively Special Fire Force Company 8. Upholding the brigade's duty to extinguish the blazing Infernals and lay their souls to rest, Shinra is determined to become a hero who will save the lives of those threatened by the flame terror.\r\n\r\nHowever, this is not the hero's game Shinra imagined. The Fire Force is a fractured mess of feuding brigades, abnormal Infernal sightings are increasing all over Tokyo, and a shadowy group is claiming to have answers to the strange fire that caused the death of Shinra's family 12 years ago. Faced with many obstacles within and outside the Fire Force, Shinra fights to uncover the truth behind the burning mysteries that have kept him in the dark.\r\n\r\n[Written by MAL Rewrite]",
    "type": "TV",
    "airing_start": "2019-07-05T16:25:00+00:00",
    "episodes": 24,
    "members": 276717,
    "genres": [
      {
        "mal_id": 1,
        "type": "anime",
        "name": "Action",
        "url": "https://myanimelist.net/anime/genre/1/Action"
      },
      {
        "mal_id": 37,
        "type": "anime",
        "name": "Supernatural",
        "url": "https://myanimelist.net/anime/genre/37/Supernatural"
      },
      {
        "mal_id": 27,
        "type": "anime",
        "name": "Shounen",
        "url": "https://myanimelist.net/anime/genre/27/Shounen"
      }
    ],
    "source": "Manga",
    "producers": [
      {
        "mal_id": 287,
        "type": "anime",
        "name": "David Production",
        "url": "https://myanimelist.net/anime/producer/287/David_Production"
      }
    ],
    "score": 7.65,
    "licensors": [
      "Funimation"
    ],
    "r18": false,
    "kids": false,
    "continuing": true
  },
  {
    "mal_id": 37521,
    "url": "https://myanimelist.net/anime/37521/Vinland_Saga",
    "title": "Vinland Saga",
    "image_url": "https://cdn.myanimelist.net/images/anime/1500/103005.jpg?s=aa9f7e573efc6c31986bcc98bf20c622",
    "synopsis": "Young Thorfinn grew up listening to the stories of old sailors that had traveled the ocean and reached the place of legend, Vinland. It's said to be warm and fertile, a place where there would be no need for fighting—not at all like the frozen village in Iceland where he was born, and certainly not like his current life as a mercenary. War is his home now. Though his father once told him, \"You have no enemies, nobody does. There is nobody who it's okay to hurt,\" as he grew, Thorfinn knew that nothing was further from the truth. \r\n\r\nThe war between England and the Danes grows worse with each passing year. Death has become commonplace, and the viking mercenaries are loving every moment of it. Allying with either side will cause a massive swing in the balance of power, and the vikings are happy to make names for themselves and take any spoils they earn along the way. Among the chaos, Thorfinn must take his revenge and kill the man who murdered his father, Askeladd. The only paradise for the vikings, it seems, is the era of war and death that rages on.\r\n\r\n[Written by MAL Rewrite]",
    "type": "TV",
    "airing_start": "2019-07-07T15:10:00+00:00",
    "episodes": 24,
    "members": 244339,
    "genres": [
      {
        "mal_id": 1,
        "type": "anime",
        "name": "Action",
        "url": "https://myanimelist.net/anime/genre/1/Action"
      },
      {
        "mal_id": 2,
        "type": "anime",
        "name": "Adventure",
        "url": "https://myanimelist.net/anime/genre/2/Adventure"
      },
      {
        "mal_id": 13,
        "type": "anime",
        "name": "Historical",
        "url": "https://myanimelist.net/anime/genre/13/Historical"
      },
      {
        "mal_id": 8,
        "type": "anime",
        "name": "Drama",
        "url": "https://myanimelist.net/anime/genre/8/Drama"
      },
      {
        "mal_id": 42,
        "type": "anime",
        "name": "Seinen",
        "url": "https://myanimelist.net/anime/genre/42/Seinen"
      }
    ],
    "source": "Manga",
    "producers": [
      {
        "mal_id": 858,
        "type": "anime",
        "name": "Wit Studio",
        "url": "https://myanimelist.net/anime/producer/858/Wit_Studio"
      }
    ],
    "score": 8.57,
    "licensors": [],
    "r18": false,
    "kids": false,
    "continuing": true
  },
  {
    "mal_id": 235,
    "url": "https://myanimelist.net/anime/235/Detective_Conan",
    "title": "Detective Conan",
    "image_url": "https://cdn.myanimelist.net/images/anime/7/75199.jpg?s=184fd7c0c1010ef9e1c90d56780b6066",
    "synopsis": "Shinichi Kudou, a high school student of astounding talent in detective work, is well known for having solved several challenging cases. One day, when Shinichi spots two suspicious men and decides to follow them, he inadvertently becomes witness to a disturbing illegal activity. Unfortunately, he is caught in the act, so the men dose him with an experimental drug formulated by their criminal organization, leaving him to his death. However, to his own astonishment, Shinichi lives to see another day, but now in the body of a seven-year-old child.\r\n\r\nPerfectly preserving his original intelligence, he hides his real identity from everyone, including his childhood friend Ran Mouri and her father, private detective Kogorou Mouri. To this end, he takes on the alias of Conan Edogawa, inspired by the mystery writers Arthur Conan Doyle and Ranpo Edogawa.\r\n\r\nDetective Conan follows Shinichi who, as Conan, starts secretly solving the senior Mouri's cases from behind the scenes with his still exceptional sleuthing skills, while covertly investigating the organization responsible for his current state, hoping to reverse the drug's effects someday.\r\n\r\n[Written by MAL Rewrite]",
    "type": "TV",
    "airing_start": "1996-01-08T09:00:00+00:00",
    "episodes": null,
    "members": 193045,
    "genres": [
      {
        "mal_id": 2,
        "type": "anime",
        "name": "Adventure",
        "url": "https://myanimelist.net/anime/genre/2/Adventure"
      },
      {
        "mal_id": 7,
        "type": "anime",
        "name": "Mystery",
        "url": "https://myanimelist.net/anime/genre/7/Mystery"
      },
      {
        "mal_id": 4,
        "type": "anime",
        "name": "Comedy",
        "url": "https://myanimelist.net/anime/genre/4/Comedy"
      },
      {
        "mal_id": 39,
        "type": "anime",
        "name": "Police",
        "url": "https://myanimelist.net/anime/genre/39/Police"
      },
      {
        "mal_id": 27,
        "type": "anime",
        "name": "Shounen",
        "url": "https://myanimelist.net/anime/genre/27/Shounen"
      }
    ],
    "source": "Manga",
    "producers": [
      {
        "mal_id": 73,
        "type": "anime",
        "name": "TMS Entertainment",
        "url": "https://myanimelist.net/anime/producer/73/TMS_Entertainment"
      }
    ],
    "score": 8.24,
    "licensors": [
      "Crunchyroll",
      "Funimation"
    ],
    "r18": false,
    "kids": false,
    "continuing": true
  },
  {
    "mal_id": 966,
    "url": "https://myanimelist.net/anime/966/Crayon_Shin-chan",
    "title": "Crayon Shin-chan",
    "image_url": "https://cdn.myanimelist.net/images/anime/10/59897.jpg?s=1a59717aef7d1846e1c74e39df0b5c13",
    "synopsis": "Just because an anime features a young protagonist does not necessarily mean that it is an appropriate series to show your children. Young Shinnosuke, or Shin-chan for short, is a very creative young boy that lives with his eccentric parents, Misae and Hiroshi, as well as his Prima Donna younger sister, Himawari, and has loads of unique friends to boot.\r\n\r\nEveryday life for little Shin-chan is full of funny (and shocking) moments, most of which stem from his unnatural and sometimes profane use of language, as well as his constant acts of inappropriate behavior. Shin-chan's famous \"elephant\" gag is one of the most defining moments in Crayon Shin-chan, simply because it is the epitome of crude comedy, one of the core themes of the series.\r\n\r\nCrayon Shin-chan is a hilarious show about the day in the life of a young, curious boy, that captures the awkwardness of growing up as well as the beauty of being true to one's self, no matter what others say.",
    "type": "TV",
    "airing_start": "1992-04-13T10:30:00+00:00",
    "episodes": null,
    "members": 43237,
    "genres": [
      {
        "mal_id": 36,
        "type": "anime",
        "name": "Slice of Life",
        "url": "https://myanimelist.net/anime/genre/36/Slice_of_Life"
      },
      {
        "mal_id": 4,
        "type": "anime",
        "name": "Comedy",
        "url": "https://myanimelist.net/anime/genre/4/Comedy"
      },
      {
        "mal_id": 9,
        "type": "anime",
        "name": "Ecchi",
        "url": "https://myanimelist.net/anime/genre/9/Ecchi"
      },
      {
        "mal_id": 23,
        "type": "anime",
        "name": "School",
        "url": "https://myanimelist.net/anime/genre/23/School"
      },
      {
        "mal_id": 42,
        "type": "anime",
        "name": "Seinen",
        "url": "https://myanimelist.net/anime/genre/42/Seinen"
      }
    ],
    "source": "Manga",
    "producers": [
      {
        "mal_id": 247,
        "type": "anime",
        "name": "Shin-Ei Animation",
        "url": "https://myanimelist.net/anime/producer/247/Shin-Ei_Animation"
      }
    ],
    "score": 7.74,
    "licensors": [
      "Funimation"
    ],
    "r18": false,
    "kids": false,
    "continuing": true
  },
  {
    "mal_id": 34034,
    "url": "https://myanimelist.net/anime/34034/Pokemon_Sun___Moon",
    "title": "Pokemon Sun & Moon",
    "image_url": "https://cdn.myanimelist.net/images/anime/11/84673.jpg?s=6d756a35907f76fe893ec627aa368108",
    "synopsis": "After his mother wins a free trip to the islands, Pokemon trainer Satoshi and his partner Pikachu head for Melemele Island of the beautiful Alola region, which is filled with lots of new Pokemon and even variations of familiar faces. Eager to explore the island, Satoshi and Pikachu run wild with excitement, quickly losing their way while chasing after a Pokemon. The pair eventually stumbles upon the Pokemon School, an institution where students come to learn more about these fascinating creatures.\r\n\r\nAt the school, when he and one of the students—the no-nonsense Kaki—have a run-in with the nefarious thugs of Team Skull, Satoshi discovers the overwhelming might of the Z-Moves, powerful attacks originating from the Alola region that require the trainer and Pokemon to be in sync. Later that night, he and Pikachu have an encounter with the guardian deity Pokemon of Melemele Island, the mysterious Kapu Kokeko. The Pokemon of legend bestows upon them a Z-Ring, a necessary tool in using the Z-Moves. Dazzled by his earlier battle and now in possession of a Z-Ring, Satoshi and Pikachu decide to stay behind in the Alola Region to learn and master the strength of these powerful new attacks.\r\n\r\nEnrolling in the Pokemon School, Satoshi is joined by classmates such as Lillie, who loves Pokemon but cannot bring herself to touch them, Kaki, and many others. Between attending classes, fending off the pesky Team Rocket—who themselves have arrived in Alola to pave the way for their organization's future plans—and taking on the Island Challenge that is necessary to master the Z-Moves, Satoshi and Pikachu are in for an exciting new adventure.\r\n\r\n[Written by MAL Rewrite]",
    "type": "TV",
    "airing_start": "2016-11-17T09:00:00+00:00",
    "episodes": 146,
    "members": 43029,
    "genres": [
      {
        "mal_id": 1,
        "type": "anime",
        "name": "Action",
        "url": "https://myanimelist.net/anime/genre/1/Action"
      },
      {
        "mal_id": 11,
        "type": "anime",
        "name": "Game",
        "url": "https://myanimelist.net/anime/genre/11/Game"
      },
      {
        "mal_id": 15,
        "type": "anime",
        "name": "Kids",
        "url": "https://myanimelist.net/anime/genre/15/Kids"
      },
      {
        "mal_id": 10,
        "type": "anime",
        "name": "Fantasy",
        "url": "https://myanimelist.net/anime/genre/10/Fantasy"
      },
      {
        "mal_id": 23,
        "type": "anime",
        "name": "School",
        "url": "https://myanimelist.net/anime/genre/23/School"
      }
    ],
    "source": "Game",
    "producers": [
      {
        "mal_id": 28,
        "type": "anime",
        "name": "OLM",
        "url": "https://myanimelist.net/anime/producer/28/OLM"
      }
    ],
    "score": 7.2,
    "licensors": [
      "The Pokemon Company International"
    ],
    "r18": false,
    "kids": true,
    "continuing": true
  },
  {
    "mal_id": 37140,
    "url": "https://myanimelist.net/anime/37140/Gegege_no_Kitarou_2018",
    "title": "Gegege no Kitarou (2018)",
    "image_url": "https://cdn.myanimelist.net/images/anime/1273/93610.jpg?s=456df3804cc4689871febf306d3f7d10",
    "synopsis": "Nearly twenty years into the 21st century, people have forgotten the existence of youkai. When a number of unexplainable phenomena plague adults of the human world with confusion and chaos, thirteen-year-old Mana writes a letter to the Youkai Post in search of answers, only to be greeted by Gegege no Kitarou...\r\n\r\n(Source: Crunchyroll)",
    "type": "TV",
    "airing_start": "2018-04-01T00:00:00+00:00",
    "episodes": null,
    "members": 31981,
    "genres": [
      {
        "mal_id": 4,
        "type": "anime",
        "name": "Comedy",
        "url": "https://myanimelist.net/anime/genre/4/Comedy"
      },
      {
        "mal_id": 37,
        "type": "anime",
        "name": "Supernatural",
        "url": "https://myanimelist.net/anime/genre/37/Supernatural"
      },
      {
        "mal_id": 6,
        "type": "anime",
        "name": "Demons",
        "url": "https://myanimelist.net/anime/genre/6/Demons"
      },
      {
        "mal_id": 27,
        "type": "anime",
        "name": "Shounen",
        "url": "https://myanimelist.net/anime/genre/27/Shounen"
      }
    ],
    "source": "Manga",
    "producers": [
      {
        "mal_id": 18,
        "type": "anime",
        "name": "Toei Animation",
        "url": "https://myanimelist.net/anime/producer/18/Toei_Animation"
      }
    ],
    "score": 6.75,
    "licensors": [],
    "r18": false,
    "kids": false,
    "continuing": true
  },
  {
    "mal_id": 38731,
    "url": "https://myanimelist.net/anime/38731/Diamond_no_Ace__Act_II",
    "title": "Diamond no Ace: Act II",
    "image_url": "https://cdn.myanimelist.net/images/anime/1153/100511.jpg?s=f720bbf569b52db053aeb70a165d63f6",
    "synopsis": "Picking up the next year after the end of the fall tournament, Seidou High School baseball team battle it out with new and old faces as they begin their tournament run at Koshien.",
    "type": "TV",
    "airing_start": "2019-04-02T08:55:00+00:00",
    "episodes": 52,
    "members": 28024,
    "genres": [
      {
        "mal_id": 4,
        "type": "anime",
        "name": "Comedy",
        "url": "https://myanimelist.net/anime/genre/4/Comedy"
      },
      {
        "mal_id": 30,
        "type": "anime",
        "name": "Sports",
        "url": "https://myanimelist.net/anime/genre/30/Sports"
      },
      {
        "mal_id": 23,
        "type": "anime",
        "name": "School",
        "url": "https://myanimelist.net/anime/genre/23/School"
      },
      {
        "mal_id": 27,
        "type": "anime",
        "name": "Shounen",
        "url": "https://myanimelist.net/anime/genre/27/Shounen"
      }
    ],
    "source": "Manga",
    "producers": [
      {
        "mal_id": 11,
        "type": "anime",
        "name": "Madhouse",
        "url": "https://myanimelist.net/anime/producer/11/Madhouse"
      }
    ],
    "score": 8.25,
    "licensors": [],
    "r18": false,
    "kids": false,
    "continuing": true
  },
  {
    "mal_id": 32212,
    "url": "https://myanimelist.net/anime/32212/Ensemble_Stars",
    "title": "Ensemble Stars!",
    "image_url": "https://cdn.myanimelist.net/images/anime/1504/100488.jpg?s=70cf0e8f25063a32c9f0c2c24ec249c3",
    "synopsis": "Yumenosaki Private Academy, a school located on a hill facing the ocean. Specializing in boys' idol training, the school has a long history of producing generations of idols for the entertainment world out of the young men overbrimming with talents, like the shining stars in the sky. Due to \"special circumstances,\" you are a transfer student at the school, as well as the only female student there. In fact, you are chosen to be the very first student of the \"producer course,\" and your task is to produce these idols… We hope you will enjoy your journey with the idols you meet at the academy, as well as the vigorous ensemble that together you will make.\r\n\r\n(Source: Ensemble Stars! Wikia) ",
    "type": "TV",
    "airing_start": "2019-07-07T13:30:00+00:00",
    "episodes": null,
    "members": 17869,
    "genres": [
      {
        "mal_id": 19,
        "type": "anime",
        "name": "Music",
        "url": "https://myanimelist.net/anime/genre/19/Music"
      },
      {
        "mal_id": 23,
        "type": "anime",
        "name": "School",
        "url": "https://myanimelist.net/anime/genre/23/School"
      }
    ],
    "source": "Game",
    "producers": [
      {
        "mal_id": 287,
        "type": "anime",
        "name": "David Production",
        "url": "https://myanimelist.net/anime/producer/287/David_Production"
      }
    ],
    "score": 6.37,
    "licensors": [],
    "r18": false,
    "kids": false,
    "continuing": true
  },
  {
    "mal_id": 8687,
    "url": "https://myanimelist.net/anime/8687/Doraemon_2005",
    "title": "Doraemon (2005)",
    "image_url": "https://cdn.myanimelist.net/images/anime/6/23935.jpg?s=e112e4cacba989c411af7bbbb3a5444f",
    "synopsis": "Doraemon (2005) is the most recent anime series based on Fujiko Fujio's manga of the same name. \r\n\r\nIt is the 2005 version of 1979 series, with certain changes in the animation and other things.\r\n\r\nDoraemon is a cat-like robot who appears in the present to steer Nobita/Noby, who is a dumb, naive and clumsy boy on the right path in order to secure his future. Nobita's love interest is Shizuka Minamoto/Sue, his frenemies are Takeshi Goda/Big G and Suneo/Sneech.\r\n\r\n(Source: Wikipedia)",
    "type": "TV",
    "airing_start": "2005-04-22T10:00:00+00:00",
    "episodes": null,
    "members": 7188,
    "genres": [
      {
        "mal_id": 24,
        "type": "anime",
        "name": "Sci-Fi",
        "url": "https://myanimelist.net/anime/genre/24/Sci-Fi"
      },
      {
        "mal_id": 4,
        "type": "anime",
        "name": "Comedy",
        "url": "https://myanimelist.net/anime/genre/4/Comedy"
      },
      {
        "mal_id": 15,
        "type": "anime",
        "name": "Kids",
        "url": "https://myanimelist.net/anime/genre/15/Kids"
      },
      {
        "mal_id": 27,
        "type": "anime",
        "name": "Shounen",
        "url": "https://myanimelist.net/anime/genre/27/Shounen"
      }
    ],
    "source": "Manga",
    "producers": [
      {
        "mal_id": 247,
        "type": "anime",
        "name": "Shin-Ei Animation",
        "url": "https://myanimelist.net/anime/producer/247/Shin-Ei_Animation"
      }
    ],
    "score": 7.53,
    "licensors": [],
    "r18": false,
    "kids": true,
    "continuing": true
  },
  {
    "mal_id": 23539,
    "url": "https://myanimelist.net/anime/23539/Gudetama",
    "title": "Gudetama",
    "image_url": "https://cdn.myanimelist.net/images/anime/10/79996.jpg?s=4b5ce7e84406c6fe5e013a31ef8c92c1",
    "synopsis": "Gudetama, an egg that is dead to the world and completely lacks motivation. No matter what cooking method you use, Gudetama remains unmoved.\r\n\r\n(Source: ANN)",
    "type": "TV",
    "airing_start": "2014-03-30T15:00:00+00:00",
    "episodes": null,
    "members": 7102,
    "genres": [
      {
        "mal_id": 4,
        "type": "anime",
        "name": "Comedy",
        "url": "https://myanimelist.net/anime/genre/4/Comedy"
      },
      {
        "mal_id": 15,
        "type": "anime",
        "name": "Kids",
        "url": "https://myanimelist.net/anime/genre/15/Kids"
      }
    ],
    "source": "Original",
    "producers": [
      {
        "mal_id": 400,
        "type": "anime",
        "name": "Gathering",
        "url": "https://myanimelist.net/anime/producer/400/Gathering"
      }
    ],
    "score": 7.2,
    "licensors": [],
    "r18": false,
    "kids": true,
    "continuing": true
  },
  {
    "mal_id": 38578,
    "url": "https://myanimelist.net/anime/38578/Star☆Twinkle_Precure",
    "title": "Star☆Twinkle Precure",
    "image_url": "https://cdn.myanimelist.net/images/anime/1585/97907.jpg?s=4f36f86ef80220125ed179686a3ce0b7",
    "synopsis": "The story begins when the protagonist Hikaru meets aliens Lala, Prunce, and Fuwa while watching the night sky. She learns of the \"Star Palace,\" where the 12 Star Princesses of the constellations kept the balance of the universe until they were attacked. Lala is searching for the legendary Precure warriors to help find the 12 scattered \"Princess Star Color Pens\" and revive the princesses. When Fuwa is captured by an enemy, Hikaru wishes to save Fuwa, and a Star Color Pendent and a Star Color Pen appear to allow her to transform into Cure Star. From then on she works to collect the pens and raise Fuwa, who is the key to reviving the princesses. \r\n\r\n(Source: ANN)",
    "type": "TV",
    "airing_start": "2019-02-02T23:30:00+00:00",
    "episodes": null,
    "members": 4689,
    "genres": [
      {
        "mal_id": 1,
        "type": "anime",
        "name": "Action",
        "url": "https://myanimelist.net/anime/genre/1/Action"
      },
      {
        "mal_id": 16,
        "type": "anime",
        "name": "Magic",
        "url": "https://myanimelist.net/anime/genre/16/Magic"
      },
      {
        "mal_id": 10,
        "type": "anime",
        "name": "Fantasy",
        "url": "https://myanimelist.net/anime/genre/10/Fantasy"
      },
      {
        "mal_id": 25,
        "type": "anime",
        "name": "Shoujo",
        "url": "https://myanimelist.net/anime/genre/25/Shoujo"
      }
    ],
    "source": "Original",
    "producers": [
      {
        "mal_id": 18,
        "type": "anime",
        "name": "Toei Animation",
        "url": "https://myanimelist.net/anime/producer/18/Toei_Animation"
      }
    ],
    "score": 7.03,
    "licensors": [],
    "r18": false,
    "kids": false,
    "continuing": true
  },
  {
    "mal_id": 1199,
    "url": "https://myanimelist.net/anime/1199/Nintama_Rantarou",
    "title": "Nintama Rantarou",
    "image_url": "https://cdn.myanimelist.net/images/anime/6/74028.jpg?s=d5b63b3b60520d4a10a497abb63dcf54",
    "synopsis": "Rantarou, Shinbei and Kirimaru are ninja apprentices in the Ninja Gakuen, where first grade ones are called \"Nintamas\" (contraction of the words ninja+tama (egg)). They must learn everything a ninja must know, but as for our heroes, money, food or playing are more interesting. The series show the everyday adventures of our heroes, segmentated in a cartoon fashion, like 2 small episodes in a 30-min show. The cast also includes the teachers (Doi-sensei and crossdressing Yamada-sensei), nintama kunoichis, evil guys (Dokutake ninjas) and even family members of all the cast...\r\n\r\n(Source: ANN)",
    "type": "TV",
    "airing_start": "1993-04-10T09:10:00+00:00",
    "episodes": null,
    "members": 3988,
    "genres": [
      {
        "mal_id": 4,
        "type": "anime",
        "name": "Comedy",
        "url": "https://myanimelist.net/anime/genre/4/Comedy"
      },
      {
        "mal_id": 15,
        "type": "anime",
        "name": "Kids",
        "url": "https://myanimelist.net/anime/genre/15/Kids"
      }
    ],
    "source": "Manga",
    "producers": [
      {
        "mal_id": 30,
        "type": "anime",
        "name": "Ajia-Do",
        "url": "https://myanimelist.net/anime/producer/30/Ajia-Do"
      }
    ],
    "score": 7.14,
    "licensors": [],
    "r18": false,
    "kids": true,
    "continuing": true
  },
  {
    "mal_id": 2406,
    "url": "https://myanimelist.net/anime/2406/Sazae-san",
    "title": "Sazae-san",
    "image_url": "https://cdn.myanimelist.net/images/anime/9/25502.jpg?s=c10be2ca5191bf047903a7bfda2f2648",
    "synopsis": "The main character is a mother named Sazae-san. She lives in a house with her husband, her kids and her parents. The show is the ultimate family program and tends to follow traditional themes. Think of this show as the Japanese equivalent to \"The Partridge Family\" and you'll get a good feel for this show's atmosphere. Don't expect to see things like violence, swearing, kung-fu action or magical girls. The plots are more like \"Today, Sazae-san goes to the new mall and gets lost\". Such \"boring\" plotlines and the simplistic art are often a turn-off to non-Japanese audiences, but most Japanese find the show incredibly good. As a result, it continues to be one of the top ratings grabbers on TV and is one of the few anime that is considered \"acceptable\" by adults. \r\n\r\n(Source: AniDB)",
    "type": "TV",
    "airing_start": "1969-10-05T09:30:00+00:00",
    "episodes": null,
    "members": 3701,
    "genres": [
      {
        "mal_id": 36,
        "type": "anime",
        "name": "Slice of Life",
        "url": "https://myanimelist.net/anime/genre/36/Slice_of_Life"
      },
      {
        "mal_id": 4,
        "type": "anime",
        "name": "Comedy",
        "url": "https://myanimelist.net/anime/genre/4/Comedy"
      }
    ],
    "source": "4-koma manga",
    "producers": [
      {
        "mal_id": 191,
        "type": "anime",
        "name": "Eiken",
        "url": "https://myanimelist.net/anime/producer/191/Eiken"
      }
    ],
    "score": 6.23,
    "licensors": [],
    "r18": false,
    "kids": false,
    "continuing": true
  },
  {
    "mal_id": 6149,
    "url": "https://myanimelist.net/anime/6149/Chibi_Maruko-chan_1995",
    "title": "Chibi Maruko-chan (1995)",
    "image_url": "https://cdn.myanimelist.net/images/anime/1108/100604.jpg?s=ea5fdbc0478b7866070a4cc2711e661f",
    "synopsis": "Momoko Sakura is an elementary school student who likes popular idol Momoe Yamaguchi and mangas. She is often called \"Chibi Maruko-chan\" due to her young age and small size. She lives together with her parents, her grandparents and her elder sister in a little town. In school, she has many friends with whom she studies and plays together everyday, including her close pal, Tama-chan; the student committee members, Maruo-kun and Migiwa-san; and the B-class trio: 'little master' Hanawa-kun, Hamaji-Bu Taro and Sekiguchi-kun. This is a fun-loving and enjoyable anime that portrays the simple things in life.\r\n\r\n(Source: ANN)",
    "type": "TV",
    "airing_start": "1995-01-08T09:00:00+00:00",
    "episodes": null,
    "members": 2315,
    "genres": [
      {
        "mal_id": 4,
        "type": "anime",
        "name": "Comedy",
        "url": "https://myanimelist.net/anime/genre/4/Comedy"
      },
      {
        "mal_id": 15,
        "type": "anime",
        "name": "Kids",
        "url": "https://myanimelist.net/anime/genre/15/Kids"
      },
      {
        "mal_id": 23,
        "type": "anime",
        "name": "School",
        "url": "https://myanimelist.net/anime/genre/23/School"
      },
      {
        "mal_id": 36,
        "type": "anime",
        "name": "Slice of Life",
        "url": "https://myanimelist.net/anime/genre/36/Slice_of_Life"
      }
    ],
    "source": "Manga",
    "producers": [
      {
        "mal_id": 22,
        "type": "anime",
        "name": "Nippon Animation",
        "url": "https://myanimelist.net/anime/producer/22/Nippon_Animation"
      }
    ],
    "score": 7.26,
    "licensors": [],
    "r18": false,
    "kids": true,
    "continuing": true
  },
  {
    "mal_id": 32353,
    "url": "https://myanimelist.net/anime/32353/Bonobono_TV_2016",
    "title": "Bonobono (TV 2016)",
    "image_url": "https://cdn.myanimelist.net/images/anime/13/77617.jpg?s=e9d278fc6d193826c87a24c5b9771f3f",
    "synopsis": "Based on the original comic BONO BONO by Mikio Igarashi that has seen over 9,000,000 total copies printed, this is the definitive animated version of the emotionally soothing character-driven series that will make you ask yourself the philosophical question, \"What are living things?\" while laughing at heartwarming gags and being entertained by the interactions of amusing forest friends Bonobono the young sea otter, Chipmunk, Fishing Cat, and more.\r\n\r\nEnjoy the easygoing days and minor misadventures of Bonobono and his friends!\r\n\r\n(Source: Fuji Creative)",
    "type": "TV",
    "airing_start": "2016-04-01T19:52:00+00:00",
    "episodes": null,
    "members": 1981,
    "genres": [
      {
        "mal_id": 36,
        "type": "anime",
        "name": "Slice of Life",
        "url": "https://myanimelist.net/anime/genre/36/Slice_of_Life"
      },
      {
        "mal_id": 4,
        "type": "anime",
        "name": "Comedy",
        "url": "https://myanimelist.net/anime/genre/4/Comedy"
      }
    ],
    "source": "4-koma manga",
    "producers": [
      {
        "mal_id": 191,
        "type": "anime",
        "name": "Eiken",
        "url": "https://myanimelist.net/anime/producer/191/Eiken"
      }
    ],
    "score": 6.39,
    "licensors": [],
    "r18": false,
    "kids": false,
    "continuing": true
  },
  {
    "mal_id": 1960,
    "url": "https://myanimelist.net/anime/1960/Sore_Ike_Anpanman",
    "title": "Sore Ike! Anpanman",
    "image_url": "https://cdn.myanimelist.net/images/anime/1/1960.jpg?s=d7c8a9546d6b82b3d679269a3d701d32",
    "synopsis": "One night, a Star of Life falls down the chimney of a bakery nestled deep in the forest, causing the dough in the oven to come to life. The dough becomes Anpanman, a superhero made of anpan (a sweet roll with bean jam filling). Together with his friends, Anpanman fights his rival Baikinman and helps the malnourished. \r\n\r\n(Source: ANN)",
    "type": "TV",
    "airing_start": "1988-10-03T07:20:00+00:00",
    "episodes": null,
    "members": 1634,
    "genres": [
      {
        "mal_id": 4,
        "type": "anime",
        "name": "Comedy",
        "url": "https://myanimelist.net/anime/genre/4/Comedy"
      },
      {
        "mal_id": 15,
        "type": "anime",
        "name": "Kids",
        "url": "https://myanimelist.net/anime/genre/15/Kids"
      },
      {
        "mal_id": 10,
        "type": "anime",
        "name": "Fantasy",
        "url": "https://myanimelist.net/anime/genre/10/Fantasy"
      }
    ],
    "source": "Picture book",
    "producers": [
      {
        "mal_id": 73,
        "type": "anime",
        "name": "TMS Entertainment",
        "url": "https://myanimelist.net/anime/producer/73/TMS_Entertainment"
      }
    ],
    "score": 6.58,
    "licensors": [],
    "r18": false,
    "kids": true,
    "continuing": true
  },
  {
    "mal_id": 39282,
    "url": "https://myanimelist.net/anime/39282/Beyblade_Burst_Gachi",
    "title": "Beyblade Burst Gachi",
    "image_url": "https://cdn.myanimelist.net/images/anime/1318/99806.jpg?s=4cba1dcc1dd001d89e0f2bb4e9e61baf",
    "synopsis": "This year's March issue of Shogakukan's CoroCoro Comics magazine announced on Friday that a new Beyblade series titled Beyblade Burst GT (Gachi) will debut on April 5. The series will stream weekly on the CoroCoro YouTube channel, the official Beyblade portal website, and the Takara Tomy Channel. The magazine shared a visual of a new protagonist with short blond hair.\r\n\r\n(Source: ANN)",
    "type": "TV",
    "airing_start": "2019-04-05T07:00:00+00:00",
    "episodes": null,
    "members": 1470,
    "genres": [
      {
        "mal_id": 1,
        "type": "anime",
        "name": "Action",
        "url": "https://myanimelist.net/anime/genre/1/Action"
      },
      {
        "mal_id": 24,
        "type": "anime",
        "name": "Sci-Fi",
        "url": "https://myanimelist.net/anime/genre/24/Sci-Fi"
      },
      {
        "mal_id": 2,
        "type": "anime",
        "name": "Adventure",
        "url": "https://myanimelist.net/anime/genre/2/Adventure"
      },
      {
        "mal_id": 30,
        "type": "anime",
        "name": "Sports",
        "url": "https://myanimelist.net/anime/genre/30/Sports"
      },
      {
        "mal_id": 27,
        "type": "anime",
        "name": "Shounen",
        "url": "https://myanimelist.net/anime/genre/27/Shounen"
      }
    ],
    "source": "Original",
    "producers": [
      {
        "mal_id": 28,
        "type": "anime",
        "name": "OLM",
        "url": "https://myanimelist.net/anime/producer/28/OLM"
      }
    ],
    "score": 6.17,
    "licensors": [],
    "r18": false,
    "kids": false,
    "continuing": true
  },
  {
    "mal_id": 38881,
    "url": "https://myanimelist.net/anime/38881/Jimoto_ga_Japan",
    "title": "Jimoto ga Japan",
    "image_url": "https://cdn.myanimelist.net/images/anime/1396/99145.jpg?s=513f9e17a88be788e0440d23e1b7a57b",
    "synopsis": "There's a new tough guy transfer student in Tokyo. His name is Tokio and he's raring to see how scrappy the locals are. But when he comes face-to-face with a Japan-obsessed red-haired kid that won't leave him alone until he tells him exactly what prefecture he's from, his life takes a turn for the crazy! This kid isn't just Japan obsessed, he's developed a martial art based on all the different prefectures in the country! \r\n\r\n(Source: VIZ Media)",
    "type": "TV",
    "airing_start": "2019-04-07T22:05:00+00:00",
    "episodes": null,
    "members": 1388,
    "genres": [
      {
        "mal_id": 36,
        "type": "anime",
        "name": "Slice of Life",
        "url": "https://myanimelist.net/anime/genre/36/Slice_of_Life"
      },
      {
        "mal_id": 4,
        "type": "anime",
        "name": "Comedy",
        "url": "https://myanimelist.net/anime/genre/4/Comedy"
      },
      {
        "mal_id": 27,
        "type": "anime",
        "name": "Shounen",
        "url": "https://myanimelist.net/anime/genre/27/Shounen"
      }
    ],
    "source": "Manga",
    "producers": [
      {
        "mal_id": 1005,
        "type": "anime",
        "name": "Oddjob",
        "url": "https://myanimelist.net/anime/producer/1005/Oddjob"
      }
    ],
    "score": null,
    "licensors": [],
    "r18": false,
    "kids": false,
    "continuing": true
  },
  {
    "mal_id": 40052,
    "url": "https://myanimelist.net/anime/40052/Great_Pretender",
    "title": "Great Pretender",
    "image_url": "https://cdn.myanimelist.net/images/anime/1883/102999.jpg?s=3f1e7ba3c762757950a26187a5915084",
    "synopsis": "Only BADs are our targets! Trick you! Deceive you! Cheat all fortunes of you! You can hear our stories in LA, Singapore, London, Shanghai and Tokyo, Why? Our \"CON GAMEs\" stage, is the whole WORLD!\r\n\r\nEdamura Masato is supposedly Japan's greatest swindler. Together with his partner Kudo, they try to trick a Frenchman in Asakusa but unexpectedly get tricked instead. The Frenchman, whom they tried to swindle, turns out to be Laurent Thierry—a much higher-level \"confidence man,\" in control of the mafia. Edamura is yet to find out what fate awaits him, after having engaged in the Frenchman's dirty jobs...!\r\n\r\n(Source: Official Website)\r\n\r\nEpisode 1 was previewed at a screening at Anime Expo in Los Angeles on July 4, 2019. Regular broadcasting will begin in 2020.",
    "type": "TV",
    "airing_start": "2019-07-03T15:00:00+00:00",
    "episodes": 23,
    "members": 1232,
    "genres": [
      {
        "mal_id": 1,
        "type": "anime",
        "name": "Action",
        "url": "https://myanimelist.net/anime/genre/1/Action"
      }
    ],
    "source": "Original",
    "producers": [
      {
        "mal_id": 858,
        "type": "anime",
        "name": "Wit Studio",
        "url": "https://myanimelist.net/anime/producer/858/Wit_Studio"
      }
    ],
    "score": 3.03,
    "licensors": [],
    "r18": false,
    "kids": false,
    "continuing": true
  },
  {
    "mal_id": 39622,
    "url": "https://myanimelist.net/anime/39622/Bakugan__Battle_Planet",
    "title": "Bakugan: Battle Planet",
    "image_url": "https://cdn.myanimelist.net/images/anime/1477/100243.jpg?s=32f19a1cf77d079f99afadb3f9c52d91",
    "synopsis": "The series follows pre-teens Dan Kouzo, Shun Kazami, Wynton Styles, Lia Venegas, and their dog Lightning. They are known as the \"Awesome Ones\" and make videos on the website ViewTube. Eventually, they stumble across a race of battling biomechanical creatures called Bakugan. They soon befriend the Bakugan and begin to battle each other with them, all while defending their neighborhood from thugs who use the Bakugan for malicious purposes. \r\n\r\n(Source: Wikipedia)",
    "type": "TV",
    "airing_start": "2019-04-01T08:55:00+00:00",
    "episodes": null,
    "members": 1112,
    "genres": [
      {
        "mal_id": 1,
        "type": "anime",
        "name": "Action",
        "url": "https://myanimelist.net/anime/genre/1/Action"
      },
      {
        "mal_id": 11,
        "type": "anime",
        "name": "Game",
        "url": "https://myanimelist.net/anime/genre/11/Game"
      },
      {
        "mal_id": 10,
        "type": "anime",
        "name": "Fantasy",
        "url": "https://myanimelist.net/anime/genre/10/Fantasy"
      }
    ],
    "source": "Original",
    "producers": [
      {
        "mal_id": 73,
        "type": "anime",
        "name": "TMS Entertainment",
        "url": "https://myanimelist.net/anime/producer/73/TMS_Entertainment"
      }
    ],
    "score": 4.87,
    "licensors": [],
    "r18": false,
    "kids": false,
    "continuing": true
  },
  {
    "mal_id": 40167,
    "url": "https://myanimelist.net/anime/40167/Cardfight_Vanguard__Shinemon-hen",
    "title": "Cardfight!! Vanguard: Shinemon-hen",
    "image_url": "https://cdn.myanimelist.net/images/anime/1804/102281.jpg?s=4a25c9a004fba5d8569596b5ebcf0a29",
    "synopsis": "This is the story of \"Shinemon Nitta\", the future manager of Card Capital.\r\n\r\n10 years before the reunion of Aichi Sendou and Toshiki Kai, the card shop run by the Tokura family \"Card Capital\" was going out of business. Then came the attempt to take over the store by Esuka Hibino, the owner of a major card shop.\r\n\r\nIn order to protect Card Capital, Shinemon Nitta stands up as the \"Self-proclaimed Manager!\"\r\n\r\n(Source: Cardfight!! Vanguard Wiki)",
    "type": "TV",
    "airing_start": "2019-08-23T15:00:00+00:00",
    "episodes": null,
    "members": 997,
    "genres": [
      {
        "mal_id": 1,
        "type": "anime",
        "name": "Action",
        "url": "https://myanimelist.net/anime/genre/1/Action"
      },
      {
        "mal_id": 11,
        "type": "anime",
        "name": "Game",
        "url": "https://myanimelist.net/anime/genre/11/Game"
      },
      {
        "mal_id": 27,
        "type": "anime",
        "name": "Shounen",
        "url": "https://myanimelist.net/anime/genre/27/Shounen"
      }
    ],
    "source": "Card game",
    "producers": [
      {
        "mal_id": 28,
        "type": "anime",
        "name": "OLM",
        "url": "https://myanimelist.net/anime/producer/28/OLM"
      }
    ],
    "score": 6.36,
    "licensors": [],
    "r18": false,
    "kids": false,
    "continuing": true
  },
  {
    "mal_id": 4459,
    "url": "https://myanimelist.net/anime/4459/Ojarumaru",
    "title": "Ojarumaru",
    "image_url": "https://cdn.myanimelist.net/images/anime/2/8519.jpg?s=d38c9c0691b7984690a52e4e8c67bd63",
    "synopsis": "In the Heian era, around 1000 years ago, a young boy of noble family named Ojarumaru is bored with his life of privilege. Meanwhile, three demons steal the power-stick of Enma, king of demons, and then lose it. Ojarumaru finds it, and uses it to transport himself to the present time. Here, he is befriended by a young boy named Kazuma, and becomes a member of his family. As time goes on, Ojarumaru makes many new friends, while dodging the comedic efforts of the three demons, Akane, Kisuke, and Aobee, as they try to recover the stick. (from ANN)",
    "type": "TV",
    "airing_start": "1998-10-05T09:10:00+00:00",
    "episodes": null,
    "members": 968,
    "genres": [
      {
        "mal_id": 2,
        "type": "anime",
        "name": "Adventure",
        "url": "https://myanimelist.net/anime/genre/2/Adventure"
      },
      {
        "mal_id": 4,
        "type": "anime",
        "name": "Comedy",
        "url": "https://myanimelist.net/anime/genre/4/Comedy"
      },
      {
        "mal_id": 15,
        "type": "anime",
        "name": "Kids",
        "url": "https://myanimelist.net/anime/genre/15/Kids"
      },
      {
        "mal_id": 10,
        "type": "anime",
        "name": "Fantasy",
        "url": "https://myanimelist.net/anime/genre/10/Fantasy"
      }
    ],
    "source": "Original",
    "producers": [
      {
        "mal_id": 36,
        "type": "anime",
        "name": "Gallop",
        "url": "https://myanimelist.net/anime/producer/36/Gallop"
      }
    ],
    "score": 6.27,
    "licensors": [
      "Enoki Films"
    ],
    "r18": false,
    "kids": true,
    "continuing": true
  },
  {
    "mal_id": 38804,
    "url": "https://myanimelist.net/anime/38804/Kiratto_Pri☆chan_2nd_Season",
    "title": "Kiratto Pri☆chan 2nd Season",
    "image_url": "https://cdn.myanimelist.net/images/anime/1616/103082.jpg?s=f9dc78e90d7789eb98de812895715e7c",
    "synopsis": "Second Season of Kiratto Pri☆chan, adding one more idol.",
    "type": "TV",
    "airing_start": "2019-04-07T01:00:00+00:00",
    "episodes": null,
    "members": 943,
    "genres": [
      {
        "mal_id": 19,
        "type": "anime",
        "name": "Music",
        "url": "https://myanimelist.net/anime/genre/19/Music"
      },
      {
        "mal_id": 36,
        "type": "anime",
        "name": "Slice of Life",
        "url": "https://myanimelist.net/anime/genre/36/Slice_of_Life"
      },
      {
        "mal_id": 4,
        "type": "anime",
        "name": "Comedy",
        "url": "https://myanimelist.net/anime/genre/4/Comedy"
      },
      {
        "mal_id": 16,
        "type": "anime",
        "name": "Magic",
        "url": "https://myanimelist.net/anime/genre/16/Magic"
      },
      {
        "mal_id": 25,
        "type": "anime",
        "name": "Shoujo",
        "url": "https://myanimelist.net/anime/genre/25/Shoujo"
      }
    ],
    "source": "Game",
    "producers": [
      {
        "mal_id": 103,
        "type": "anime",
        "name": "Tatsunoko Production",
        "url": "https://myanimelist.net/anime/producer/103/Tatsunoko_Production"
      }
    ],
    "score": 6.4,
    "licensors": [],
    "r18": false,
    "kids": false,
    "continuing": true
  },
  {
    "mal_id": 33933,
    "url": "https://myanimelist.net/anime/33933/Yasamura_Yasashi_no_Yasashii_Sekai",
    "title": "Yasamura Yasashi no Yasashii Sekai",
    "image_url": "https://cdn.myanimelist.net/images/anime/10/81641.jpg?s=e73ce83aef511fd518854d38a8f0874c",
    "synopsis": " The series follows a mysterious but gentle-hearted man named Yasashi Yasamura who spreads warmth and human kindness wherever he goes.\r\n\r\n(Source: Crunchyroll)\r\n\r\n33 Episodes have been released as of July 2019.",
    "type": "TV",
    "airing_start": "2016-09-01T15:00:00+00:00",
    "episodes": null,
    "members": 843,
    "genres": [
      {
        "mal_id": 4,
        "type": "anime",
        "name": "Comedy",
        "url": "https://myanimelist.net/anime/genre/4/Comedy"
      }
    ],
    "source": "Original",
    "producers": [
      {
        "mal_id": 276,
        "type": "anime",
        "name": "DLE",
        "url": "https://myanimelist.net/anime/producer/276/DLE"
      }
    ],
    "score": 5.44,
    "licensors": [],
    "r18": false,
    "kids": false,
    "continuing": true
  },
  {
    "mal_id": 36409,
    "url": "https://myanimelist.net/anime/36409/Yodel_no_Onna",
    "title": "Yodel no Onna",
    "image_url": "https://cdn.myanimelist.net/images/anime/11/87843.jpg?s=0290f4b753f525152951657e5c856f08",
    "synopsis": "The sound of yodeling will appear when you least expect it. ",
    "type": "TV",
    "airing_start": "2017-09-21T15:00:00+00:00",
    "episodes": null,
    "members": 782,
    "genres": [
      {
        "mal_id": 19,
        "type": "anime",
        "name": "Music",
        "url": "https://myanimelist.net/anime/genre/19/Music"
      },
      {
        "mal_id": 4,
        "type": "anime",
        "name": "Comedy",
        "url": "https://myanimelist.net/anime/genre/4/Comedy"
      }
    ],
    "source": "Original",
    "producers": [
      {
        "mal_id": 276,
        "type": "anime",
        "name": "DLE",
        "url": "https://myanimelist.net/anime/producer/276/DLE"
      }
    ],
    "score": 5.81,
    "licensors": [],
    "r18": false,
    "kids": false,
    "continuing": true
  },
  {
    "mal_id": 37096,
    "url": "https://myanimelist.net/anime/37096/Puzzle___Dragon",
    "title": "Puzzle & Dragon",
    "image_url": "https://cdn.myanimelist.net/images/anime/1535/95070.jpg?s=8565e732bf91de4bd76ea89e8a94c2e5",
    "synopsis": "The story is set in modern day Japan following the growth of the protagonist Taiga Akashi, an elementary school kid who wants to be a professional gamer someday. \r\n\r\n(Source: Crunchyroll)",
    "type": "TV",
    "airing_start": "2018-04-02T09:25:00+00:00",
    "episodes": null,
    "members": 695,
    "genres": [
      {
        "mal_id": 11,
        "type": "anime",
        "name": "Game",
        "url": "https://myanimelist.net/anime/genre/11/Game"
      },
      {
        "mal_id": 15,
        "type": "anime",
        "name": "Kids",
        "url": "https://myanimelist.net/anime/genre/15/Kids"
      }
    ],
    "source": "Game",
    "producers": [
      {
        "mal_id": 1,
        "type": "anime",
        "name": "Studio Pierrot",
        "url": "https://myanimelist.net/anime/producer/1/Studio_Pierrot"
      }
    ],
    "score": null,
    "licensors": [],
    "r18": false,
    "kids": true,
    "continuing": true
  },
  {
    "mal_id": 33398,
    "url": "https://myanimelist.net/anime/33398/Neko_Konogoro",
    "title": "Neko Konogoro",
    "image_url": "https://cdn.myanimelist.net/images/anime/1877/91297.jpg?s=9ea7191cd41206a8628d4a5226d15786",
    "synopsis": "Based on the characters created by Study.",
    "type": "TV",
    "airing_start": "2016-06-07T15:00:00+00:00",
    "episodes": null,
    "members": 663,
    "genres": [
      {
        "mal_id": 4,
        "type": "anime",
        "name": "Comedy",
        "url": "https://myanimelist.net/anime/genre/4/Comedy"
      }
    ],
    "source": "Manga",
    "producers": [
      {
        "mal_id": 432,
        "type": "anime",
        "name": "Kachidoki Studio",
        "url": "https://myanimelist.net/anime/producer/432/Kachidoki_Studio"
      }
    ],
    "score": null,
    "licensors": [],
    "r18": false,
    "kids": false,
    "continuing": true
  },
  {
    "mal_id": 35478,
    "url": "https://myanimelist.net/anime/35478/Neko_no_Robu",
    "title": "Neko no Robu",
    "image_url": "https://cdn.myanimelist.net/images/anime/1859/91295.jpg?s=1027d53fc303ad969d5aa6d7d2e71c7f",
    "synopsis": "The series stars a cat with a lack of energy who speaks while lying down, yet has a thorough personality.  He thinks various things and has fun watching humans.",
    "type": "TV",
    "airing_start": "2017-05-05T21:30:00+00:00",
    "episodes": null,
    "members": 644,
    "genres": [
      {
        "mal_id": 4,
        "type": "anime",
        "name": "Comedy",
        "url": "https://myanimelist.net/anime/genre/4/Comedy"
      },
      {
        "mal_id": 36,
        "type": "anime",
        "name": "Slice of Life",
        "url": "https://myanimelist.net/anime/genre/36/Slice_of_Life"
      }
    ],
    "source": "Original",
    "producers": [
      {
        "mal_id": 432,
        "type": "anime",
        "name": "Kachidoki Studio",
        "url": "https://myanimelist.net/anime/producer/432/Kachidoki_Studio"
      }
    ],
    "score": null,
    "licensors": [],
    "r18": false,
    "kids": false,
    "continuing": true
  },
  {
    "mal_id": 39277,
    "url": "https://myanimelist.net/anime/39277/Youkai_Watch",
    "title": "Youkai Watch!",
    "image_url": "https://cdn.myanimelist.net/images/anime/1194/99093.jpg?s=7310c47060fcab6940bd71a5a19f3392",
    "synopsis": "A new season of Youkai Watch focusing on elementary schooler Keita Amano again. The events take place right after the original season; but still chronologically occur before the now complete Shadow Side events as they take place 30 years in the future. ",
    "type": "TV",
    "airing_start": "2019-04-05T09:25:00+00:00",
    "episodes": null,
    "members": 614,
    "genres": [
      {
        "mal_id": 4,
        "type": "anime",
        "name": "Comedy",
        "url": "https://myanimelist.net/anime/genre/4/Comedy"
      },
      {
        "mal_id": 6,
        "type": "anime",
        "name": "Demons",
        "url": "https://myanimelist.net/anime/genre/6/Demons"
      },
      {
        "mal_id": 15,
        "type": "anime",
        "name": "Kids",
        "url": "https://myanimelist.net/anime/genre/15/Kids"
      },
      {
        "mal_id": 37,
        "type": "anime",
        "name": "Supernatural",
        "url": "https://myanimelist.net/anime/genre/37/Supernatural"
      }
    ],
    "source": "Game",
    "producers": [
      {
        "mal_id": 28,
        "type": "anime",
        "name": "OLM",
        "url": "https://myanimelist.net/anime/producer/28/OLM"
      }
    ],
    "score": 5.81,
    "licensors": [],
    "r18": false,
    "kids": true,
    "continuing": true
  },
  {
    "mal_id": 39039,
    "url": "https://myanimelist.net/anime/39039/Duel_Masters",
    "title": "Duel Masters!!",
    "image_url": "https://cdn.myanimelist.net/images/anime/1307/100408.jpg?s=671980e1a16da89fda75d852772d82d4",
    "synopsis": "(No synopsis yet.)",
    "type": "TV",
    "airing_start": "2019-04-06T23:30:00+00:00",
    "episodes": null,
    "members": 564,
    "genres": [
      {
        "mal_id": 1,
        "type": "anime",
        "name": "Action",
        "url": "https://myanimelist.net/anime/genre/1/Action"
      },
      {
        "mal_id": 2,
        "type": "anime",
        "name": "Adventure",
        "url": "https://myanimelist.net/anime/genre/2/Adventure"
      },
      {
        "mal_id": 4,
        "type": "anime",
        "name": "Comedy",
        "url": "https://myanimelist.net/anime/genre/4/Comedy"
      },
      {
        "mal_id": 27,
        "type": "anime",
        "name": "Shounen",
        "url": "https://myanimelist.net/anime/genre/27/Shounen"
      }
    ],
    "source": "Original",
    "producers": [
      {
        "mal_id": 112,
        "type": "anime",
        "name": "Brain's Base",
        "url": "https://myanimelist.net/anime/producer/112/Brains_Base"
      },
      {
        "mal_id": 474,
        "type": "anime",
        "name": "Shogakukan Music & Digital Entertainment",
        "url": "https://myanimelist.net/anime/producer/474/Shogakukan_Music___Digital_Entertainment"
      }
    ],
    "score": null,
    "licensors": [],
    "r18": false,
    "kids": false,
    "continuing": true
  },
  {
    "mal_id": 30151,
    "url": "https://myanimelist.net/anime/30151/Kamiusagi_Rope__Warau_Asa_ni_wa_Fukuraitaru_tte_Maji_ssuka",
    "title": "Kamiusagi Rope: Warau Asa ni wa Fukuraitaru tte Maji ssuka!?",
    "image_url": "https://cdn.myanimelist.net/images/anime/6/72182.jpg?s=6ac059eeacd8ab7268350221db3c9526",
    "synopsis": "Fourth season of Kamiusagi Rope, events occur after the feature film. Airs on Mezamashi TV instead of the theaters.",
    "type": "TV",
    "airing_start": "2012-11-15T21:45:00+00:00",
    "episodes": null,
    "members": 526,
    "genres": [
      {
        "mal_id": 36,
        "type": "anime",
        "name": "Slice of Life",
        "url": "https://myanimelist.net/anime/genre/36/Slice_of_Life"
      },
      {
        "mal_id": 4,
        "type": "anime",
        "name": "Comedy",
        "url": "https://myanimelist.net/anime/genre/4/Comedy"
      }
    ],
    "source": "Original",
    "producers": [],
    "score": null,
    "licensors": [],
    "r18": false,
    "kids": false,
    "continuing": true
  },
  {
    "mal_id": 7505,
    "url": "https://myanimelist.net/anime/7505/Knyacki",
    "title": "Knyacki!",
    "image_url": "https://cdn.myanimelist.net/images/anime/2/55107.jpg?s=558d30a7eb5d62583209beabed76c197",
    "synopsis": "Two caterpillars investigate objects on a kitchen counter while searching for food. One of them finds a piece of pasta and is intrigued by the fact that there's a hole in the middle.\r\n\r\nThey are having fun until a big mean caterpillar arrives. It's time for a major show down...",
    "type": "TV",
    "airing_start": "1995-04-06T15:00:00+00:00",
    "episodes": null,
    "members": 499,
    "genres": [
      {
        "mal_id": 4,
        "type": "anime",
        "name": "Comedy",
        "url": "https://myanimelist.net/anime/genre/4/Comedy"
      },
      {
        "mal_id": 15,
        "type": "anime",
        "name": "Kids",
        "url": "https://myanimelist.net/anime/genre/15/Kids"
      },
      {
        "mal_id": 8,
        "type": "anime",
        "name": "Drama",
        "url": "https://myanimelist.net/anime/genre/8/Drama"
      },
      {
        "mal_id": 10,
        "type": "anime",
        "name": "Fantasy",
        "url": "https://myanimelist.net/anime/genre/10/Fantasy"
      }
    ],
    "source": "-",
    "producers": [],
    "score": 6.3,
    "licensors": [],
    "r18": false,
    "kids": true,
    "continuing": true
  },
  {
    "mal_id": 39007,
    "url": "https://myanimelist.net/anime/39007/Kawauso_Labo",
    "title": "Kawauso Labo",
    "image_url": "https://cdn.myanimelist.net/images/anime/1458/98252.jpg?s=01b45293455f007f95da08c5cc099eb2",
    "synopsis": "(No synopsis yet.)",
    "type": "TV",
    "airing_start": "2019-01-14T15:00:00+00:00",
    "episodes": null,
    "members": 489,
    "genres": [
      {
        "mal_id": 4,
        "type": "anime",
        "name": "Comedy",
        "url": "https://myanimelist.net/anime/genre/4/Comedy"
      }
    ],
    "source": "Other",
    "producers": [
      {
        "mal_id": 432,
        "type": "anime",
        "name": "Kachidoki Studio",
        "url": "https://myanimelist.net/anime/producer/432/Kachidoki_Studio"
      }
    ],
    "score": null,
    "licensors": [],
    "r18": false,
    "kids": false,
    "continuing": true
  },
  {
    "mal_id": 40249,
    "url": "https://myanimelist.net/anime/40249/Balala_Xiaomoxian__Mofa_Hai_Ying_Bao",
    "title": "Balala Xiaomoxian: Mofa Hai Ying Bao",
    "image_url": "https://cdn.myanimelist.net/images/anime/1463/102588.jpg?s=152b507ff112a21e2b5f359b2ed16de9",
    "synopsis": "(No synopsis yet.)",
    "type": "TV",
    "airing_start": "2018-11-15T15:00:00+00:00",
    "episodes": null,
    "members": 427,
    "genres": [],
    "source": "-",
    "producers": [],
    "score": 7.33,
    "licensors": [],
    "r18": false,
    "kids": false,
    "continuing": true
  },
  {
    "mal_id": 10506,
    "url": "https://myanimelist.net/anime/10506/Shiawase_Haitatsu_Taneko",
    "title": "Shiawase Haitatsu Taneko",
    "image_url": "https://cdn.myanimelist.net/images/anime/2/28900.jpg?s=53efc3b4c2da55e43c488d594cb5d000",
    "synopsis": "The story centers around a cat who answers people's wishes and delivers happiness. (\"Tane\" and \"neko\" are the Japanese words for \"seed\" and \"cat,\" respectively.)\n\n(Source: ANN)",
    "type": "TV",
    "airing_start": "2011-03-25T15:00:00+00:00",
    "episodes": null,
    "members": 390,
    "genres": [
      {
        "mal_id": 4,
        "type": "anime",
        "name": "Comedy",
        "url": "https://myanimelist.net/anime/genre/4/Comedy"
      }
    ],
    "source": "Original",
    "producers": [
      {
        "mal_id": 432,
        "type": "anime",
        "name": "Kachidoki Studio",
        "url": "https://myanimelist.net/anime/producer/432/Kachidoki_Studio"
      }
    ],
    "score": null,
    "licensors": [],
    "r18": false,
    "kids": false,
    "continuing": true
  },
  {
    "mal_id": 39457,
    "url": "https://myanimelist.net/anime/39457/Shounen_Ashibe__Go_Go_Goma-chan_4",
    "title": "Shounen Ashibe: Go! Go! Goma-chan 4",
    "image_url": "https://cdn.myanimelist.net/images/anime/1454/100376.jpg?s=100e306049914bd1140f75e5efdd67f8",
    "synopsis": "Fourth season of Shounen Ashibe: Go! Go! Goma-chan.",
    "type": "TV",
    "airing_start": "2019-04-02T09:45:00+00:00",
    "episodes": null,
    "members": 363,
    "genres": [
      {
        "mal_id": 36,
        "type": "anime",
        "name": "Slice of Life",
        "url": "https://myanimelist.net/anime/genre/36/Slice_of_Life"
      },
      {
        "mal_id": 4,
        "type": "anime",
        "name": "Comedy",
        "url": "https://myanimelist.net/anime/genre/4/Comedy"
      },
      {
        "mal_id": 42,
        "type": "anime",
        "name": "Seinen",
        "url": "https://myanimelist.net/anime/genre/42/Seinen"
      }
    ],
    "source": "4-koma manga",
    "producers": [],
    "score": 5.88,
    "licensors": [],
    "r18": false,
    "kids": false,
    "continuing": true
  },
  {
    "mal_id": 39031,
    "url": "https://myanimelist.net/anime/39031/B_Rappers_Street",
    "title": "B Rappers Street",
    "image_url": "https://cdn.myanimelist.net/images/anime/1126/99095.jpg?s=504c1f7147d015971bb23df9a58c645d",
    "synopsis": "A multimedia project collaboration between Shogakukan, Sony Interactive Entertainment, Sony Music Entertainment, and Sony Music Communications, and features a theme of rap and hip-hop.\r\n\r\nThe story follows Yo!Hey, a boy who raps to the beat of his farts. \r\n\r\nThe anime will air withing the Ota-Suta (\"Good Morning Star\") children's television program and the manga counterpart will be published in March.\r\n\r\n(Source: ANN)",
    "type": "TV",
    "airing_start": "2019-04-10T22:05:00+00:00",
    "episodes": null,
    "members": 354,
    "genres": [
      {
        "mal_id": 19,
        "type": "anime",
        "name": "Music",
        "url": "https://myanimelist.net/anime/genre/19/Music"
      },
      {
        "mal_id": 4,
        "type": "anime",
        "name": "Comedy",
        "url": "https://myanimelist.net/anime/genre/4/Comedy"
      }
    ],
    "source": "Original",
    "producers": [
      {
        "mal_id": 1229,
        "type": "anime",
        "name": "Pie in the sky",
        "url": "https://myanimelist.net/anime/producer/1229/Pie_in_the_sky"
      }
    ],
    "score": null,
    "licensors": [],
    "r18": false,
    "kids": false,
    "continuing": true
  },
  {
    "mal_id": 8336,
    "url": "https://myanimelist.net/anime/8336/Hanakappa",
    "title": "Hanakappa",
    "image_url": "https://cdn.myanimelist.net/images/anime/1105/90503.jpg?s=c533381311ad095ae2f88e5174c3868d",
    "synopsis": "Story about Kappa with flowers on their heads.",
    "type": "TV",
    "airing_start": "2010-03-28T15:00:00+00:00",
    "episodes": null,
    "members": 339,
    "genres": [
      {
        "mal_id": 4,
        "type": "anime",
        "name": "Comedy",
        "url": "https://myanimelist.net/anime/genre/4/Comedy"
      },
      {
        "mal_id": 15,
        "type": "anime",
        "name": "Kids",
        "url": "https://myanimelist.net/anime/genre/15/Kids"
      }
    ],
    "source": "Picture book",
    "producers": [
      {
        "mal_id": 28,
        "type": "anime",
        "name": "OLM",
        "url": "https://myanimelist.net/anime/producer/28/OLM"
      },
      {
        "mal_id": 27,
        "type": "anime",
        "name": "Xebec",
        "url": "https://myanimelist.net/anime/producer/27/Xebec"
      }
    ],
    "score": 6.2,
    "licensors": [],
    "r18": false,
    "kids": true,
    "continuing": true
  },
  {
    "mal_id": 32956,
    "url": "https://myanimelist.net/anime/32956/Aware_Meisaku-kun",
    "title": "Aware! Meisaku-kun",
    "image_url": "https://cdn.myanimelist.net/images/anime/13/79069.jpg?s=0efc7cf57100bae5028f58c23664919f",
    "synopsis": "A long, long time ago, there was a prestigious school called \"Ryuuguu Elementary School\" that produced many masterpiece characters. One day, an ordinary boy named Meisaku Matsuda enrolled at the school. Little did he know that the place for learning was filled with crazy characters like Sweets, the energetic idiot; Musubi, a rice ball who gets angry when called \"onigiri\"; Nokio, a narcissistic self-proclaimed robot; and Bolt, who's clearly faster than a rabbit. Surrounded by such unique characters, will Meisaku be able to graduate as a splendid masterpiece character?\r\n\r\n(Source: Anime News Network)",
    "type": "TV",
    "airing_start": "2016-04-08T09:20:00+00:00",
    "episodes": null,
    "members": 313,
    "genres": [
      {
        "mal_id": 4,
        "type": "anime",
        "name": "Comedy",
        "url": "https://myanimelist.net/anime/genre/4/Comedy"
      },
      {
        "mal_id": 20,
        "type": "anime",
        "name": "Parody",
        "url": "https://myanimelist.net/anime/genre/20/Parody"
      },
      {
        "mal_id": 15,
        "type": "anime",
        "name": "Kids",
        "url": "https://myanimelist.net/anime/genre/15/Kids"
      },
      {
        "mal_id": 23,
        "type": "anime",
        "name": "School",
        "url": "https://myanimelist.net/anime/genre/23/School"
      }
    ],
    "source": "Original",
    "producers": [
      {
        "mal_id": 1229,
        "type": "anime",
        "name": "Pie in the sky",
        "url": "https://myanimelist.net/anime/producer/1229/Pie_in_the_sky"
      }
    ],
    "score": null,
    "licensors": [],
    "r18": false,
    "kids": true,
    "continuing": true
  },
  {
    "mal_id": 37359,
    "url": "https://myanimelist.net/anime/37359/Kekkero_Ke",
    "title": "Kekkero Ke",
    "image_url": "https://cdn.myanimelist.net/images/anime/1377/93114.jpg?s=17dce4aaab27244553355458a97c0e49",
    "synopsis": "The anime follows the frogs Kekkero and Ke who try to find their 998 other siblings. \r\n\r\n(Source: ANN)",
    "type": "TV",
    "airing_start": "2018-04-04T15:00:00+00:00",
    "episodes": null,
    "members": 306,
    "genres": [
      {
        "mal_id": 4,
        "type": "anime",
        "name": "Comedy",
        "url": "https://myanimelist.net/anime/genre/4/Comedy"
      }
    ],
    "source": "Original",
    "producers": [
      {
        "mal_id": 10,
        "type": "anime",
        "name": "Production I.G",
        "url": "https://myanimelist.net/anime/producer/10/Production_IG"
      }
    ],
    "score": null,
    "licensors": [],
    "r18": false,
    "kids": false,
    "continuing": true
  },
  {
    "mal_id": 39003,
    "url": "https://myanimelist.net/anime/39003/Kyou_mo_Tsuno_ga_Aru",
    "title": "Kyou mo Tsuno ga Aru",
    "image_url": "https://cdn.myanimelist.net/images/anime/1189/98233.jpg?s=23f923a869648c37d1cb0c0d55c56041",
    "synopsis": "An everyday life of yellow frog with horn.  Based on the web manga of the same title.",
    "type": "TV",
    "airing_start": "2019-02-21T12:54:00+00:00",
    "episodes": null,
    "members": 275,
    "genres": [
      {
        "mal_id": 4,
        "type": "anime",
        "name": "Comedy",
        "url": "https://myanimelist.net/anime/genre/4/Comedy"
      }
    ],
    "source": "Web manga",
    "producers": [
      {
        "mal_id": 1077,
        "type": "anime",
        "name": "MMDGP",
        "url": "https://myanimelist.net/anime/producer/1077/MMDGP"
      }
    ],
    "score": null,
    "licensors": [],
    "r18": false,
    "kids": false,
    "continuing": true
  },
  {
    "mal_id": 40089,
    "url": "https://myanimelist.net/anime/40089/Pittanko_Nekozakana",
    "title": "Pittanko!! Nekozakana",
    "image_url": "https://cdn.myanimelist.net/images/anime/1058/102001.jpg?s=22ea5b05339a358e2678557995f96a8d",
    "synopsis": "(No synopsis yet.)",
    "type": "TV",
    "airing_start": "2017-10-08T15:00:00+00:00",
    "episodes": null,
    "members": 267,
    "genres": [],
    "source": "-",
    "producers": [],
    "score": 7.35,
    "licensors": [],
    "r18": false,
    "kids": false,
    "continuing": true
  },
  {
    "mal_id": 38365,
    "url": "https://myanimelist.net/anime/38365/Aigan_Kaijuu",
    "title": "Aigan Kaijuu",
    "image_url": "https://cdn.myanimelist.net/images/anime/1557/95194.jpg?s=d5c607145013809306ae21f9c4ce42fe",
    "synopsis": "(No synopsis yet.)",
    "type": "TV",
    "airing_start": "2018-10-06T21:54:00+00:00",
    "episodes": null,
    "members": 256,
    "genres": [
      {
        "mal_id": 4,
        "type": "anime",
        "name": "Comedy",
        "url": "https://myanimelist.net/anime/genre/4/Comedy"
      },
      {
        "mal_id": 10,
        "type": "anime",
        "name": "Fantasy",
        "url": "https://myanimelist.net/anime/genre/10/Fantasy"
      },
      {
        "mal_id": 20,
        "type": "anime",
        "name": "Parody",
        "url": "https://myanimelist.net/anime/genre/20/Parody"
      }
    ],
    "source": "Other",
    "producers": [
      {
        "mal_id": 1324,
        "type": "anime",
        "name": "Shimogumi",
        "url": "https://myanimelist.net/anime/producer/1324/Shimogumi"
      }
    ],
    "score": null,
    "licensors": [],
    "r18": false,
    "kids": false,
    "continuing": true
  },
  {
    "mal_id": 39040,
    "url": "https://myanimelist.net/anime/39040/Kedama_no_Gonjirou",
    "title": "Kedama no Gonjirou",
    "image_url": "https://cdn.myanimelist.net/images/anime/1952/99800.jpg?s=f30676280df588452a9b69ad2648fe2c",
    "synopsis": "(No synopsis yet.)",
    "type": "TV",
    "airing_start": "2019-04-06T01:00:00+00:00",
    "episodes": null,
    "members": 254,
    "genres": [
      {
        "mal_id": 1,
        "type": "anime",
        "name": "Action",
        "url": "https://myanimelist.net/anime/genre/1/Action"
      },
      {
        "mal_id": 2,
        "type": "anime",
        "name": "Adventure",
        "url": "https://myanimelist.net/anime/genre/2/Adventure"
      },
      {
        "mal_id": 4,
        "type": "anime",
        "name": "Comedy",
        "url": "https://myanimelist.net/anime/genre/4/Comedy"
      },
      {
        "mal_id": 10,
        "type": "anime",
        "name": "Fantasy",
        "url": "https://myanimelist.net/anime/genre/10/Fantasy"
      },
      {
        "mal_id": 27,
        "type": "anime",
        "name": "Shounen",
        "url": "https://myanimelist.net/anime/genre/27/Shounen"
      }
    ],
    "source": "Other",
    "producers": [],
    "score": null,
    "licensors": [],
    "r18": false,
    "kids": false,
    "continuing": true
  },
  {
    "mal_id": 36552,
    "url": "https://myanimelist.net/anime/36552/Pikachin-Kit",
    "title": "Pikachin-Kit",
    "image_url": "https://cdn.myanimelist.net/images/anime/12/88334.jpg?s=96d06b5e871e8d77dd84b865b4566d12",
    "synopsis": "A fifth-year elementary student named Eiji Tōmatsu, and his \"inspiration\" buddy, a dog named Pochirou. One day Eiji finds a mysterious book called the \"Pikachin Research Book,\" and learns about the seven tools that make up the Pikachin Kit. Eiji presses a button inside the research book, and immediately a \"Future Amazon\" delivery arrives at his door with the kit. Eiji uses the blueprints included in the box to assemble the kit, but it seems as though 1% part of the kit is still missing. \r\n\r\nIn the franchise, the word \"Pikachin\" means the flash of inspiration or insight one gets about a new project, similar to the visual of a lightbulb turning on above one's head when someone has an idea. The concept of the franchise is \"invention is 99% plastic models, 1% inspiration.\" \r\n\r\n(Source: ANN)",
    "type": "TV",
    "airing_start": "2018-01-06T00:30:00+00:00",
    "episodes": null,
    "members": 232,
    "genres": [
      {
        "mal_id": 4,
        "type": "anime",
        "name": "Comedy",
        "url": "https://myanimelist.net/anime/genre/4/Comedy"
      },
      {
        "mal_id": 15,
        "type": "anime",
        "name": "Kids",
        "url": "https://myanimelist.net/anime/genre/15/Kids"
      },
      {
        "mal_id": 24,
        "type": "anime",
        "name": "Sci-Fi",
        "url": "https://myanimelist.net/anime/genre/24/Sci-Fi"
      }
    ],
    "source": "Original",
    "producers": [
      {
        "mal_id": 28,
        "type": "anime",
        "name": "OLM",
        "url": "https://myanimelist.net/anime/producer/28/OLM"
      },
      {
        "mal_id": 247,
        "type": "anime",
        "name": "Shin-Ei Animation",
        "url": "https://myanimelist.net/anime/producer/247/Shin-Ei_Animation"
      }
    ],
    "score": null,
    "licensors": [],
    "r18": false,
    "kids": true,
    "continuing": true
  },
  {
    "mal_id": 18941,
    "url": "https://myanimelist.net/anime/18941/Shimajirou_no_Wow",
    "title": "Shimajirou no Wow!",
    "image_url": "https://cdn.myanimelist.net/images/anime/9/50737.jpg?s=1564fe5d8a93a91738498b4cfb45cc1b",
    "synopsis": "Fourth season of the Shimajirou children's television series.",
    "type": "TV",
    "airing_start": "2012-04-01T22:30:00+00:00",
    "episodes": null,
    "members": 231,
    "genres": [
      {
        "mal_id": 2,
        "type": "anime",
        "name": "Adventure",
        "url": "https://myanimelist.net/anime/genre/2/Adventure"
      },
      {
        "mal_id": 4,
        "type": "anime",
        "name": "Comedy",
        "url": "https://myanimelist.net/anime/genre/4/Comedy"
      },
      {
        "mal_id": 10,
        "type": "anime",
        "name": "Fantasy",
        "url": "https://myanimelist.net/anime/genre/10/Fantasy"
      },
      {
        "mal_id": 15,
        "type": "anime",
        "name": "Kids",
        "url": "https://myanimelist.net/anime/genre/15/Kids"
      },
      {
        "mal_id": 16,
        "type": "anime",
        "name": "Magic",
        "url": "https://myanimelist.net/anime/genre/16/Magic"
      }
    ],
    "source": "Other",
    "producers": [
      {
        "mal_id": 229,
        "type": "anime",
        "name": "The Answer Studio",
        "url": "https://myanimelist.net/anime/producer/229/The_Answer_Studio"
      }
    ],
    "score": null,
    "licensors": [],
    "r18": false,
    "kids": true,
    "continuing": true
  },
  {
    "mal_id": 40040,
    "url": "https://myanimelist.net/anime/40040/Odoru_Mowai-kun",
    "title": "Odoru Mowai-kun",
    "image_url": "https://cdn.myanimelist.net/images/anime/1123/102544.jpg?s=a5d57df8791f35a19bca7304008a62f8",
    "synopsis": "The anime centers on a Moai statue named Mowai-kun who is gloomy every day because it lives a dull life where it just watches the beach and the sun from atop a hill on an island. But one day Mowai-kun grows arms, and starts to dance. The anime will air within the Oha-Suta program's \"Kyara-Suta\" corner.\r\n\r\n(Source: ANN)",
    "type": "TV",
    "airing_start": "2019-07-01T22:05:00+00:00",
    "episodes": null,
    "members": 228,
    "genres": [
      {
        "mal_id": 4,
        "type": "anime",
        "name": "Comedy",
        "url": "https://myanimelist.net/anime/genre/4/Comedy"
      },
      {
        "mal_id": 15,
        "type": "anime",
        "name": "Kids",
        "url": "https://myanimelist.net/anime/genre/15/Kids"
      }
    ],
    "source": "Original",
    "producers": [
      {
        "mal_id": 1973,
        "type": "anime",
        "name": "Monster's Egg",
        "url": "https://myanimelist.net/anime/producer/1973/Monsters_Egg"
      }
    ],
    "score": null,
    "licensors": [],
    "r18": false,
    "kids": true,
    "continuing": true
  },
  {
    "mal_id": 22669,
    "url": "https://myanimelist.net/anime/22669/Gohan_Kaijuu_Pap",
    "title": "Gohan Kaijuu Pap",
    "image_url": "https://cdn.myanimelist.net/images/anime/13/59289.jpg?s=0c6cc23d5f2a259175c216dc2ba292f8",
    "synopsis": "A series of short, 30-second segments featuring Gohan Kaijuu Pap and various \"side dish\" monsters to produce delicious meals.",
    "type": "TV",
    "airing_start": "2011-04-24T15:00:00+00:00",
    "episodes": null,
    "members": 221,
    "genres": [
      {
        "mal_id": 1,
        "type": "anime",
        "name": "Action",
        "url": "https://myanimelist.net/anime/genre/1/Action"
      },
      {
        "mal_id": 4,
        "type": "anime",
        "name": "Comedy",
        "url": "https://myanimelist.net/anime/genre/4/Comedy"
      },
      {
        "mal_id": 15,
        "type": "anime",
        "name": "Kids",
        "url": "https://myanimelist.net/anime/genre/15/Kids"
      }
    ],
    "source": "Original",
    "producers": [
      {
        "mal_id": 276,
        "type": "anime",
        "name": "DLE",
        "url": "https://myanimelist.net/anime/producer/276/DLE"
      }
    ],
    "score": null,
    "licensors": [],
    "r18": false,
    "kids": true,
    "continuing": true
  },
  {
    "mal_id": 13457,
    "url": "https://myanimelist.net/anime/13457/Tomodachi_8-nin",
    "title": "Tomodachi 8-nin",
    "image_url": "https://cdn.myanimelist.net/images/anime/4/72123.jpg?s=1315343291cc10d42102318148d77cc8",
    "synopsis": "A series oriented to three-year-old children, showing the everydays of 9 characters, each of them having a distinct feature. Children will recognize characters and situations from their own life. Sometimes through conflicts, sometimes through encouragement, they will find everyone's place in the world. The story conveys messages such as \"Nobody's alone\", \"It's good to be different\" and the importance of being connected with others, in a fun way.\r\n\r\n(Source: Official site)",
    "type": "TV",
    "airing_start": "2011-03-27T15:00:00+00:00",
    "episodes": null,
    "members": 220,
    "genres": [
      {
        "mal_id": 4,
        "type": "anime",
        "name": "Comedy",
        "url": "https://myanimelist.net/anime/genre/4/Comedy"
      },
      {
        "mal_id": 15,
        "type": "anime",
        "name": "Kids",
        "url": "https://myanimelist.net/anime/genre/15/Kids"
      }
    ],
    "source": "Original",
    "producers": [
      {
        "mal_id": 593,
        "type": "anime",
        "name": "Egg",
        "url": "https://myanimelist.net/anime/producer/593/Egg"
      }
    ],
    "score": null,
    "licensors": [],
    "r18": false,
    "kids": true,
    "continuing": true
  },
  {
    "mal_id": 35112,
    "url": "https://myanimelist.net/anime/35112/Panpaka_Pants_O_New-san",
    "title": "Panpaka Pants O New-san",
    "image_url": "https://cdn.myanimelist.net/images/anime/3/84705.jpg?s=40d433e71c7e7c92b45ff1bc17a3dc86",
    "synopsis": "Sequel to Panpaka Pants W-O-New!. ",
    "type": "TV",
    "airing_start": "2017-04-06T15:00:00+00:00",
    "episodes": 24,
    "members": 189,
    "genres": [
      {
        "mal_id": 4,
        "type": "anime",
        "name": "Comedy",
        "url": "https://myanimelist.net/anime/genre/4/Comedy"
      },
      {
        "mal_id": 15,
        "type": "anime",
        "name": "Kids",
        "url": "https://myanimelist.net/anime/genre/15/Kids"
      }
    ],
    "source": "Original",
    "producers": [],
    "score": null,
    "licensors": [],
    "r18": false,
    "kids": true,
    "continuing": true
  },
  {
    "mal_id": 30119,
    "url": "https://myanimelist.net/anime/30119/Yowamushi_Monsters",
    "title": "Yowamushi Monsters",
    "image_url": "https://cdn.myanimelist.net/images/anime/11/72127.jpg?s=7110515ffc08aec6616412117cba967f",
    "synopsis": "An NHK toddler's anime following cowardly creatures representing typical Halloween monsters like Dracula and a witch.",
    "type": "TV",
    "airing_start": "2012-12-24T15:00:00+00:00",
    "episodes": null,
    "members": 188,
    "genres": [
      {
        "mal_id": 15,
        "type": "anime",
        "name": "Kids",
        "url": "https://myanimelist.net/anime/genre/15/Kids"
      }
    ],
    "source": "Original",
    "producers": [],
    "score": null,
    "licensors": [],
    "r18": false,
    "kids": true,
    "continuing": true
  },
  {
    "mal_id": 38776,
    "url": "https://myanimelist.net/anime/38776/Manul_no_Yuube",
    "title": "Manul no Yuube",
    "image_url": "https://cdn.myanimelist.net/images/anime/1980/96936.jpg?s=393b1dd4900167081ea956629f03c768",
    "synopsis": "Within the nature \"Darwin Kita! Kikimono Shin Densetsu\" program on NHK1.5 airs the short Manul no Yuube, based on a web manga/comic of the same name. It following animal characters who visit the bar Manul no Yuube. The bar is run by the Mama who is a Pallas's cat (Otocolobus manul) and serviced by the hostess Tsunomin who is a Brazilian treehopper (Bocydium globulare).",
    "type": "TV",
    "airing_start": "2018-11-10T15:00:00+00:00",
    "episodes": null,
    "members": 160,
    "genres": [
      {
        "mal_id": 36,
        "type": "anime",
        "name": "Slice of Life",
        "url": "https://myanimelist.net/anime/genre/36/Slice_of_Life"
      }
    ],
    "source": "Web manga",
    "producers": [],
    "score": null,
    "licensors": [],
    "r18": false,
    "kids": false,
    "continuing": true
  },
  {
    "mal_id": 29375,
    "url": "https://myanimelist.net/anime/29375/Robot_Pulta",
    "title": "Robot Pulta",
    "image_url": "https://cdn.myanimelist.net/images/anime/9/70637.jpg?s=2e14004b523534ba83dd096f7fb435cd",
    "synopsis": "Stop-motion animation about robots; though mainly focusing on Pulta a white square robot.",
    "type": "TV",
    "airing_start": "1995-04-03T15:00:00+00:00",
    "episodes": null,
    "members": 155,
    "genres": [
      {
        "mal_id": 2,
        "type": "anime",
        "name": "Adventure",
        "url": "https://myanimelist.net/anime/genre/2/Adventure"
      },
      {
        "mal_id": 4,
        "type": "anime",
        "name": "Comedy",
        "url": "https://myanimelist.net/anime/genre/4/Comedy"
      },
      {
        "mal_id": 15,
        "type": "anime",
        "name": "Kids",
        "url": "https://myanimelist.net/anime/genre/15/Kids"
      },
      {
        "mal_id": 18,
        "type": "anime",
        "name": "Mecha",
        "url": "https://myanimelist.net/anime/genre/18/Mecha"
      }
    ],
    "source": "-",
    "producers": [],
    "score": null,
    "licensors": [],
    "r18": false,
    "kids": true,
    "continuing": true
  },
  {
    "mal_id": 29421,
    "url": "https://myanimelist.net/anime/29421/Liv___Bell",
    "title": "Liv & Bell",
    "image_url": "https://cdn.myanimelist.net/images/anime/6/70717.jpg?s=d3901944234a76e7c6a78177c7f2eb34",
    "synopsis": "A stop-motion animation about Liv, a curious little girl and Bell, a gluttonous hedgehog. Together they go on an adventure in a picture book. ",
    "type": "TV",
    "airing_start": "2013-02-14T15:00:00+00:00",
    "episodes": null,
    "members": 148,
    "genres": [
      {
        "mal_id": 2,
        "type": "anime",
        "name": "Adventure",
        "url": "https://myanimelist.net/anime/genre/2/Adventure"
      },
      {
        "mal_id": 15,
        "type": "anime",
        "name": "Kids",
        "url": "https://myanimelist.net/anime/genre/15/Kids"
      }
    ],
    "source": "-",
    "producers": [],
    "score": null,
    "licensors": [],
    "r18": false,
    "kids": true,
    "continuing": true
  },
  {
    "mal_id": 35697,
    "url": "https://myanimelist.net/anime/35697/Beads_no_Mori_no_Rabi",
    "title": "Beads no Mori no Rabi",
    "image_url": "https://cdn.myanimelist.net/images/anime/6/86113.jpg?s=488e89e649b331e18038afb9744fe36c",
    "synopsis": "A stop-motion anime using beaded characters. Here a magician rabbits solve problems by using magic. ",
    "type": "TV",
    "airing_start": "2015-03-19T15:00:00+00:00",
    "episodes": null,
    "members": 135,
    "genres": [
      {
        "mal_id": 15,
        "type": "anime",
        "name": "Kids",
        "url": "https://myanimelist.net/anime/genre/15/Kids"
      },
      {
        "mal_id": 16,
        "type": "anime",
        "name": "Magic",
        "url": "https://myanimelist.net/anime/genre/16/Magic"
      }
    ],
    "source": "Original",
    "producers": [],
    "score": null,
    "licensors": [],
    "r18": false,
    "kids": true,
    "continuing": true
  },
  {
    "mal_id": 35372,
    "url": "https://myanimelist.net/anime/35372/Otoppe",
    "title": "Otoppe",
    "image_url": "https://cdn.myanimelist.net/images/anime/4/85180.jpg?s=d79a23db87a9fbb22fdfc663b7ebd79f",
    "synopsis": "The series follows a young girl named Shina who hopes to become the world's best DJ, and is interested in new sounds. Shina explores a mysterious world filled with Otoppe, strange creatures capable of unique sounds.",
    "type": "TV",
    "airing_start": "2017-04-02T23:40:00+00:00",
    "episodes": null,
    "members": 127,
    "genres": [
      {
        "mal_id": 10,
        "type": "anime",
        "name": "Fantasy",
        "url": "https://myanimelist.net/anime/genre/10/Fantasy"
      },
      {
        "mal_id": 15,
        "type": "anime",
        "name": "Kids",
        "url": "https://myanimelist.net/anime/genre/15/Kids"
      },
      {
        "mal_id": 19,
        "type": "anime",
        "name": "Music",
        "url": "https://myanimelist.net/anime/genre/19/Music"
      }
    ],
    "source": "Original",
    "producers": [],
    "score": null,
    "licensors": [],
    "r18": false,
    "kids": true,
    "continuing": true
  },
  {
    "mal_id": 35696,
    "url": "https://myanimelist.net/anime/35696/Konigiri-kun",
    "title": "Konigiri-kun",
    "image_url": "https://cdn.myanimelist.net/images/anime/8/86112.jpg?s=9b52d1a313e62efd144dd9980082a1f5",
    "synopsis": "A stop-motion anime using bentou ingredients as the characters.",
    "type": "TV",
    "airing_start": "2015-02-19T15:00:00+00:00",
    "episodes": null,
    "members": 126,
    "genres": [
      {
        "mal_id": 15,
        "type": "anime",
        "name": "Kids",
        "url": "https://myanimelist.net/anime/genre/15/Kids"
      }
    ],
    "source": "Original",
    "producers": [],
    "score": null,
    "licensors": [],
    "r18": false,
    "kids": true,
    "continuing": true
  },
  {
    "mal_id": 36506,
    "url": "https://myanimelist.net/anime/36506/Fuwafuwa_Hour__Pui_Pui___Muu_Muu",
    "title": "Fuwafuwa Hour: Pui Pui & Muu Muu",
    "image_url": "https://cdn.myanimelist.net/images/anime/12/88145.jpg?s=05e167456e29073d31c1505b5ea17a21",
    "synopsis": "Fairies living in a fluffy forest, where both flowers and trees are fluffy. Follow a witch's trouble-maker apprentices Pui Pui and Muu Muu. ",
    "type": "TV",
    "airing_start": "2017-07-11T15:00:00+00:00",
    "episodes": null,
    "members": 118,
    "genres": [
      {
        "mal_id": 15,
        "type": "anime",
        "name": "Kids",
        "url": "https://myanimelist.net/anime/genre/15/Kids"
      },
      {
        "mal_id": 10,
        "type": "anime",
        "name": "Fantasy",
        "url": "https://myanimelist.net/anime/genre/10/Fantasy"
      }
    ],
    "source": "Original",
    "producers": [],
    "score": null,
    "licensors": [],
    "r18": false,
    "kids": true,
    "continuing": true
  },
  {
    "mal_id": 35698,
    "url": "https://myanimelist.net/anime/35698/Oidon_to",
    "title": "Oidon to",
    "image_url": "https://cdn.myanimelist.net/images/anime/13/86114.jpg?s=e3e561f58dd1ad04f16bd24126103172",
    "synopsis": "A young boy tries to become as strong of a sumo wrestler as his father. ",
    "type": "TV",
    "airing_start": "2015-12-01T15:00:00+00:00",
    "episodes": null,
    "members": 118,
    "genres": [
      {
        "mal_id": 30,
        "type": "anime",
        "name": "Sports",
        "url": "https://myanimelist.net/anime/genre/30/Sports"
      },
      {
        "mal_id": 15,
        "type": "anime",
        "name": "Kids",
        "url": "https://myanimelist.net/anime/genre/15/Kids"
      }
    ],
    "source": "Original",
    "producers": [],
    "score": null,
    "licensors": [],
    "r18": false,
    "kids": true,
    "continuing": true
  },
  {
    "mal_id": 39820,
    "url": "https://myanimelist.net/anime/39820/Chuldong_Super_Wings_3",
    "title": "Chuldong! Super Wings 3",
    "image_url": "https://cdn.myanimelist.net/images/anime/1328/101000.jpg?s=647607d86d93d73eabede48750d4bbef",
    "synopsis": "(No synopsis yet.)",
    "type": "TV",
    "airing_start": "2018-08-31T15:00:00+00:00",
    "episodes": null,
    "members": 110,
    "genres": [],
    "source": "Original",
    "producers": [],
    "score": null,
    "licensors": [],
    "r18": false,
    "kids": false,
    "continuing": true
  },
  {
    "mal_id": 39635,
    "url": "https://myanimelist.net/anime/39635/Daifuku-kunKin_Tele_2nd_Season",
    "title": "Daifuku-kun@Kin Tele 2nd Season",
    "image_url": "https://cdn.myanimelist.net/images/anime/1780/100288.jpg?s=46751b962bbef5c51b8092aa85970270",
    "synopsis": "(No synopsis yet.)",
    "type": "TV",
    "airing_start": "2019-04-04T22:30:00+00:00",
    "episodes": null,
    "members": 107,
    "genres": [
      {
        "mal_id": 4,
        "type": "anime",
        "name": "Comedy",
        "url": "https://myanimelist.net/anime/genre/4/Comedy"
      }
    ],
    "source": "Other",
    "producers": [],
    "score": null,
    "licensors": [],
    "r18": false,
    "kids": false,
    "continuing": true
  },
  {
    "mal_id": 34990,
    "url": "https://myanimelist.net/anime/34990/Unicorn_no_Kyupi",
    "title": "Unicorn no Kyupi",
    "image_url": "https://cdn.myanimelist.net/images/anime/1165/91319.jpg?s=490ac383cac39da5a5a56dd2034fddec",
    "synopsis": "Unicorn no Kyupi is a helpful sprite that lives in the kitchen and polishes dirty pots and pans clean with its fluffy white body. Harigorou, a rival sprite shaped like a hedgehog, tries to interfere. \r\n\r\n(Source: Crunchyroll)",
    "type": "TV",
    "airing_start": "2017-03-19T15:00:00+00:00",
    "episodes": null,
    "members": 104,
    "genres": [
      {
        "mal_id": 10,
        "type": "anime",
        "name": "Fantasy",
        "url": "https://myanimelist.net/anime/genre/10/Fantasy"
      },
      {
        "mal_id": 15,
        "type": "anime",
        "name": "Kids",
        "url": "https://myanimelist.net/anime/genre/15/Kids"
      }
    ],
    "source": "Original",
    "producers": [],
    "score": null,
    "licensors": [],
    "r18": false,
    "kids": true,
    "continuing": true
  },
  {
    "mal_id": 38908,
    "url": "https://myanimelist.net/anime/38908/Neko_no_Nyagh__Nya_Misérables",
    "title": "Neko no Nyagh: Nya Misérables",
    "image_url": "https://cdn.myanimelist.net/images/anime/1463/97898.jpg?s=4f4651a2c4d2a7f0468c5ec3da89d02e",
    "synopsis": "TV adaptation of Cocone Corporation's mobile puzzle game app.\r\n\r\nDiscover the adventures of the cat painter, Vincent van Meowogh who lives in a mansion in Paris surrounded by his quirky friends. Let's give him a spark of inspiration for his painting by completing puzzle stages, buy back the furniture and restore his home to its former glory!\r\n\r\n(Source: ANN)",
    "type": "TV",
    "airing_start": "2019-04-02T22:30:00+00:00",
    "episodes": null,
    "members": 98,
    "genres": [
      {
        "mal_id": 15,
        "type": "anime",
        "name": "Kids",
        "url": "https://myanimelist.net/anime/genre/15/Kids"
      }
    ],
    "source": "Game",
    "producers": [
      {
        "mal_id": 73,
        "type": "anime",
        "name": "TMS Entertainment",
        "url": "https://myanimelist.net/anime/producer/73/TMS_Entertainment"
      }
    ],
    "score": null,
    "licensors": [],
    "r18": false,
    "kids": true,
    "continuing": true
  },
  {
    "mal_id": 38099,
    "url": "https://myanimelist.net/anime/38099/Pakkororin",
    "title": "Pakkororin",
    "image_url": "https://cdn.myanimelist.net/images/anime/1134/93318.jpg?s=f39e29f6e78944b6a6bdce2b98ea0980",
    "synopsis": "A minute long children's anime that follows 3 siblings. Two brothers who are rectangular and circular shaped, and a sister who is triangluar shaped. They have unique personalities and foster growth and discovery through their play time.",
    "type": "TV",
    "airing_start": "2011-03-27T23:24:00+00:00",
    "episodes": null,
    "members": 79,
    "genres": [
      {
        "mal_id": 15,
        "type": "anime",
        "name": "Kids",
        "url": "https://myanimelist.net/anime/genre/15/Kids"
      }
    ],
    "source": "Original",
    "producers": [],
    "score": null,
    "licensors": [],
    "r18": false,
    "kids": true,
    "continuing": true
  },
  {
    "mal_id": 38451,
    "url": "https://myanimelist.net/anime/38451/Reizouko_no_Tsukenosuke",
    "title": "Reizouko no Tsukenosuke!",
    "image_url": "https://cdn.myanimelist.net/images/anime/1884/95217.jpg?s=2b1f422db4d67803ebdded14bd8fbd6c",
    "synopsis": "A gag anime about foods in a refrigerator. The anime airs within the Oha Suta children's morning TV program and will receive a simultaneous manga serialization by Kazumata Oguri.",
    "type": "TV",
    "airing_start": "2018-09-30T22:05:00+00:00",
    "episodes": null,
    "members": 79,
    "genres": [
      {
        "mal_id": 4,
        "type": "anime",
        "name": "Comedy",
        "url": "https://myanimelist.net/anime/genre/4/Comedy"
      },
      {
        "mal_id": 15,
        "type": "anime",
        "name": "Kids",
        "url": "https://myanimelist.net/anime/genre/15/Kids"
      },
      {
        "mal_id": 20,
        "type": "anime",
        "name": "Parody",
        "url": "https://myanimelist.net/anime/genre/20/Parody"
      }
    ],
    "source": "Original",
    "producers": [],
    "score": null,
    "licensors": [],
    "r18": false,
    "kids": true,
    "continuing": true
  },
  {
    "mal_id": 39356,
    "url": "https://myanimelist.net/anime/39356/Neko_Neko_Nihonshi_4th_Season",
    "title": "Neko Neko Nihonshi 4th Season",
    "image_url": "https://cdn.myanimelist.net/images/anime/1092/99365.jpg?s=388d87a7b2d1213c392fd45792f92947",
    "synopsis": "(No synopsis yet.)",
    "type": "TV",
    "airing_start": "2019-04-02T15:00:00+00:00",
    "episodes": null,
    "members": 74,
    "genres": [
      {
        "mal_id": 13,
        "type": "anime",
        "name": "Historical",
        "url": "https://myanimelist.net/anime/genre/13/Historical"
      },
      {
        "mal_id": 20,
        "type": "anime",
        "name": "Parody",
        "url": "https://myanimelist.net/anime/genre/20/Parody"
      },
      {
        "mal_id": 15,
        "type": "anime",
        "name": "Kids",
        "url": "https://myanimelist.net/anime/genre/15/Kids"
      },
      {
        "mal_id": 21,
        "type": "anime",
        "name": "Samurai",
        "url": "https://myanimelist.net/anime/genre/21/Samurai"
      }
    ],
    "source": "Web manga",
    "producers": [],
    "score": null,
    "licensors": [],
    "r18": false,
    "kids": true,
    "continuing": true
  },
  {
    "mal_id": 39798,
    "url": "https://myanimelist.net/anime/39798/Zhu_Zhu_Xia__Konglong_Riji",
    "title": "Zhu Zhu Xia: Konglong Riji",
    "image_url": "https://cdn.myanimelist.net/images/anime/1956/100947.jpg?s=4b80dd49a4e40ffa76206f7db8e79e1b",
    "synopsis": "A more educational season of GG Bond.\r\n\r\nGG Bond works on cleaning up some fossils at the lab as they'll be used in a museum exhibit. He uses a fossil to create a data coin that is compatible with his special jet. This allows for him to travel back in time to the original animal (a T-Rex) the fossil was made of. While GG Bond is ecstatic to learn about dinosaurs in-person (as well as mine more accurate data for the data coin), he didn't quite realize the danger he'd be in. He successfully gets out of this sticky situation but there's still a lot more dinosaurs he needs to get information on.",
    "type": "TV",
    "airing_start": "2019-04-29T15:00:00+00:00",
    "episodes": 52,
    "members": 59,
    "genres": [
      {
        "mal_id": 13,
        "type": "anime",
        "name": "Historical",
        "url": "https://myanimelist.net/anime/genre/13/Historical"
      },
      {
        "mal_id": 15,
        "type": "anime",
        "name": "Kids",
        "url": "https://myanimelist.net/anime/genre/15/Kids"
      },
      {
        "mal_id": 24,
        "type": "anime",
        "name": "Sci-Fi",
        "url": "https://myanimelist.net/anime/genre/24/Sci-Fi"
      },
      {
        "mal_id": 31,
        "type": "anime",
        "name": "Super Power",
        "url": "https://myanimelist.net/anime/genre/31/Super_Power"
      }
    ],
    "source": "Original",
    "producers": [],
    "score": null,
    "licensors": [],
    "r18": false,
    "kids": true,
    "continuing": true
  },
  {
    "mal_id": 39528,
    "url": "https://myanimelist.net/anime/39528/Washimo_7th_Season",
    "title": "Washimo 7th Season",
    "image_url": "https://cdn.myanimelist.net/images/anime/1263/99787.jpg?s=e93e805f84cf6d73198aeead1daba98d",
    "synopsis": "Seventh season of the Washimo series.",
    "type": "TV",
    "airing_start": "2019-03-31T15:00:00+00:00",
    "episodes": null,
    "members": 52,
    "genres": [
      {
        "mal_id": 4,
        "type": "anime",
        "name": "Comedy",
        "url": "https://myanimelist.net/anime/genre/4/Comedy"
      },
      {
        "mal_id": 15,
        "type": "anime",
        "name": "Kids",
        "url": "https://myanimelist.net/anime/genre/15/Kids"
      },
      {
        "mal_id": 23,
        "type": "anime",
        "name": "School",
        "url": "https://myanimelist.net/anime/genre/23/School"
      },
      {
        "mal_id": 24,
        "type": "anime",
        "name": "Sci-Fi",
        "url": "https://myanimelist.net/anime/genre/24/Sci-Fi"
      },
      {
        "mal_id": 36,
        "type": "anime",
        "name": "Slice of Life",
        "url": "https://myanimelist.net/anime/genre/36/Slice_of_Life"
      }
    ],
    "source": "Picture book",
    "producers": [],
    "score": null,
    "licensors": [],
    "r18": false,
    "kids": true,
    "continuing": true
  },
  {
    "mal_id": 39806,
    "url": "https://myanimelist.net/anime/39806/Mugen_no_Juunin__Immortal",
    "title": "Mugen no Juunin: Immortal",
    "image_url": "https://cdn.myanimelist.net/images/anime/1263/102516.jpg?s=c49321b50c213d8a6f2ac929072c5917",
    "synopsis": "Manji is an immortal swordsman, who has been cursed with eternal life. He has grown tired of living with all the death he has created. He has no skills other than those of killing, thus he forms a plan to regain his mortality: he shall kill one hundred evil men for each good one he has killed. The old witch who afflicted Manji with immortality agrees to Manji’s proposition and Manji is set on his path to kill one thousand evil men. On his journey he meets a young girl, Rin, who has her own vengeance to seek against the sword school whose members slaughtered Rin’s family. Rin and Manji journey together, each hoping to find some kind of peace. In their way are many varied enemies. Rin and Manji are almost constantly under attack and must learn to live their lives, avoiding being consumed by revenge.\r\n\r\n(Source: ANN)",
    "type": "ONA",
    "airing_start": "2019-10-09T15:00:00+00:00",
    "episodes": 24,
    "members": 25975,
    "genres": [
      {
        "mal_id": 1,
        "type": "anime",
        "name": "Action",
        "url": "https://myanimelist.net/anime/genre/1/Action"
      },
      {
        "mal_id": 2,
        "type": "anime",
        "name": "Adventure",
        "url": "https://myanimelist.net/anime/genre/2/Adventure"
      },
      {
        "mal_id": 13,
        "type": "anime",
        "name": "Historical",
        "url": "https://myanimelist.net/anime/genre/13/Historical"
      },
      {
        "mal_id": 37,
        "type": "anime",
        "name": "Supernatural",
        "url": "https://myanimelist.net/anime/genre/37/Supernatural"
      },
      {
        "mal_id": 8,
        "type": "anime",
        "name": "Drama",
        "url": "https://myanimelist.net/anime/genre/8/Drama"
      },
      {
        "mal_id": 17,
        "type": "anime",
        "name": "Martial Arts",
        "url": "https://myanimelist.net/anime/genre/17/Martial_Arts"
      },
      {
        "mal_id": 21,
        "type": "anime",
        "name": "Samurai",
        "url": "https://myanimelist.net/anime/genre/21/Samurai"
      },
      {
        "mal_id": 42,
        "type": "anime",
        "name": "Seinen",
        "url": "https://myanimelist.net/anime/genre/42/Seinen"
      }
    ],
    "source": "Manga",
    "producers": [
      {
        "mal_id": 839,
        "type": "anime",
        "name": "LIDENFILMS",
        "url": "https://myanimelist.net/anime/producer/839/LIDENFILMS"
      }
    ],
    "score": 7.4,
    "licensors": [],
    "r18": false,
    "kids": false,
    "continuing": false
  },
  {
    "mal_id": 40542,
    "url": "https://myanimelist.net/anime/40542/Saiki_Kusuo_no_Ψ-nan__Shidou-hen",
    "title": "Saiki Kusuo no Ψ-nan: Shidou-hen",
    "image_url": "https://cdn.myanimelist.net/images/anime/1943/103504.jpg?s=bdc987f8542c9bcb1e679e40d4d9d24a",
    "synopsis": "(No synopsis yet.)",
    "type": "ONA",
    "airing_start": "2019-12-29T15:00:00+00:00",
    "episodes": 6,
    "members": 14148,
    "genres": [
      {
        "mal_id": 36,
        "type": "anime",
        "name": "Slice of Life",
        "url": "https://myanimelist.net/anime/genre/36/Slice_of_Life"
      },
      {
        "mal_id": 4,
        "type": "anime",
        "name": "Comedy",
        "url": "https://myanimelist.net/anime/genre/4/Comedy"
      },
      {
        "mal_id": 37,
        "type": "anime",
        "name": "Supernatural",
        "url": "https://myanimelist.net/anime/genre/37/Supernatural"
      },
      {
        "mal_id": 23,
        "type": "anime",
        "name": "School",
        "url": "https://myanimelist.net/anime/genre/23/School"
      },
      {
        "mal_id": 27,
        "type": "anime",
        "name": "Shounen",
        "url": "https://myanimelist.net/anime/genre/27/Shounen"
      }
    ],
    "source": "Manga",
    "producers": [
      {
        "mal_id": 1444,
        "type": "anime",
        "name": "Egg Firm",
        "url": "https://myanimelist.net/anime/producer/1444/Egg_Firm"
      },
      {
        "mal_id": 7,
        "type": "anime",
        "name": "J.C.Staff",
        "url": "https://myanimelist.net/anime/producer/7/JCStaff"
      }
    ],
    "score": null,
    "licensors": [],
    "r18": false,
    "kids": false,
    "continuing": false
  },
  {
    "mal_id": 40178,
    "url": "https://myanimelist.net/anime/40178/Null_Peta",
    "title": "Null Peta",
    "image_url": "https://cdn.myanimelist.net/images/anime/1586/103381.jpg?s=13da96268780dadca3758b273c3698a0",
    "synopsis": "Genius inventor Null tragically loses her older sister Peta in an accident. To get over the grief, Null develops \"Peta Robo,\" a robot with the same characteristics as her late sister. However, the robot is a little different as to what Null expected.\r\n\r\n(Source: MAL News)",
    "type": "ONA",
    "airing_start": "2019-10-03T15:00:00+00:00",
    "episodes": null,
    "members": 10599,
    "genres": [
      {
        "mal_id": 24,
        "type": "anime",
        "name": "Sci-Fi",
        "url": "https://myanimelist.net/anime/genre/24/Sci-Fi"
      }
    ],
    "source": "Original",
    "producers": [
      {
        "mal_id": 247,
        "type": "anime",
        "name": "Shin-Ei Animation",
        "url": "https://myanimelist.net/anime/producer/247/Shin-Ei_Animation"
      }
    ],
    "score": 6.14,
    "licensors": [],
    "r18": false,
    "kids": false,
    "continuing": false
  },
  {
    "mal_id": 38163,
    "url": "https://myanimelist.net/anime/38163/Iya_na_Kao_sare_nagara_Opantsu_Misete_Moraitai_2",
    "title": "Iya na Kao sare nagara Opantsu Misete Moraitai 2",
    "image_url": "https://cdn.myanimelist.net/images/anime/1682/100905.jpg?s=4721721972cc5647cbce85313c7e3965",
    "synopsis": "(No synopsis yet.)",
    "type": "ONA",
    "airing_start": "2019-12-30T15:00:00+00:00",
    "episodes": null,
    "members": 7786,
    "genres": [
      {
        "mal_id": 9,
        "type": "anime",
        "name": "Ecchi",
        "url": "https://myanimelist.net/anime/genre/9/Ecchi"
      }
    ],
    "source": "Other",
    "producers": [
      {
        "mal_id": 1842,
        "type": "anime",
        "name": "Urban Product",
        "url": "https://myanimelist.net/anime/producer/1842/Urban_Product"
      },
      {
        "mal_id": 1882,
        "type": "anime",
        "name": "UWAN Pictures",
        "url": "https://myanimelist.net/anime/producer/1882/UWAN_Pictures"
      }
    ],
    "score": null,
    "licensors": [],
    "r18": false,
    "kids": false,
    "continuing": false
  },
  {
    "mal_id": 40269,
    "url": "https://myanimelist.net/anime/40269/Kengan_Ashura_2nd_Season",
    "title": "Kengan Ashura 2nd Season",
    "image_url": "https://cdn.myanimelist.net/images/anime/1546/102680.jpg?s=5aaa0022cd9f32d718bcb652bb4f2e78",
    "synopsis": "Second half of Kengan Ashura.",
    "type": "ONA",
    "airing_start": "2019-10-30T15:00:00+00:00",
    "episodes": 12,
    "members": 6325,
    "genres": [
      {
        "mal_id": 1,
        "type": "anime",
        "name": "Action",
        "url": "https://myanimelist.net/anime/genre/1/Action"
      },
      {
        "mal_id": 17,
        "type": "anime",
        "name": "Martial Arts",
        "url": "https://myanimelist.net/anime/genre/17/Martial_Arts"
      }
    ],
    "source": "Web manga",
    "producers": [
      {
        "mal_id": 896,
        "type": "anime",
        "name": "Larx Entertainment",
        "url": "https://myanimelist.net/anime/producer/896/Larx_Entertainment"
      }
    ],
    "score": 7.82,
    "licensors": [],
    "r18": false,
    "kids": false,
    "continuing": false
  },
  {
    "mal_id": 40192,
    "url": "https://myanimelist.net/anime/40192/Gundam_Build_Divers_Re_Rise",
    "title": "Gundam Build Divers Re:Rise",
    "image_url": "https://cdn.myanimelist.net/images/anime/1305/102377.jpg?s=a30342e624df28b834547fe453a8727f",
    "synopsis": "New Gundam Rebuild Divers series to stream via Official Gundam Channel.",
    "type": "ONA",
    "airing_start": "2019-10-09T15:00:00+00:00",
    "episodes": null,
    "members": 3092,
    "genres": [
      {
        "mal_id": 1,
        "type": "anime",
        "name": "Action",
        "url": "https://myanimelist.net/anime/genre/1/Action"
      },
      {
        "mal_id": 24,
        "type": "anime",
        "name": "Sci-Fi",
        "url": "https://myanimelist.net/anime/genre/24/Sci-Fi"
      },
      {
        "mal_id": 18,
        "type": "anime",
        "name": "Mecha",
        "url": "https://myanimelist.net/anime/genre/18/Mecha"
      }
    ],
    "source": "Original",
    "producers": [
      {
        "mal_id": 142,
        "type": "anime",
        "name": "Asatsu DK",
        "url": "https://myanimelist.net/anime/producer/142/Asatsu_DK"
      },
      {
        "mal_id": 14,
        "type": "anime",
        "name": "Sunrise",
        "url": "https://myanimelist.net/anime/producer/14/Sunrise"
      }
    ],
    "score": 6.67,
    "licensors": [],
    "r18": false,
    "kids": false,
    "continuing": false
  },
  {
    "mal_id": 38891,
    "url": "https://myanimelist.net/anime/38891/Sora_no_Method__Mou_Hitotsu_no_Negai",
    "title": "Sora no Method: Mou Hitotsu no Negai",
    "image_url": "https://cdn.myanimelist.net/images/anime/1472/97902.jpg?s=c1c22a61ee0f495227c45cf6065a71d5",
    "synopsis": "The official website of Sora no Method (Celestial Method) announced a new episode for the anime series. The episode will feature a new character.\r\n\r\n(Source: MAL News)",
    "type": "ONA",
    "airing_start": "2019-10-10T15:00:00+00:00",
    "episodes": 1,
    "members": 2455,
    "genres": [
      {
        "mal_id": 36,
        "type": "anime",
        "name": "Slice of Life",
        "url": "https://myanimelist.net/anime/genre/36/Slice_of_Life"
      },
      {
        "mal_id": 4,
        "type": "anime",
        "name": "Comedy",
        "url": "https://myanimelist.net/anime/genre/4/Comedy"
      },
      {
        "mal_id": 10,
        "type": "anime",
        "name": "Fantasy",
        "url": "https://myanimelist.net/anime/genre/10/Fantasy"
      },
      {
        "mal_id": 23,
        "type": "anime",
        "name": "School",
        "url": "https://myanimelist.net/anime/genre/23/School"
      }
    ],
    "source": "Original",
    "producers": [
      {
        "mal_id": 1127,
        "type": "anime",
        "name": "Studio 3Hz",
        "url": "https://myanimelist.net/anime/producer/1127/Studio_3Hz"
      }
    ],
    "score": 7.28,
    "licensors": [],
    "r18": false,
    "kids": false,
    "continuing": false
  },
  {
    "mal_id": 39574,
    "url": "https://myanimelist.net/anime/39574/Levius",
    "title": "Levius",
    "image_url": "https://cdn.myanimelist.net/images/anime/1860/99916.jpg?s=f85ece7fd81fd0799675dc09269f3abf",
    "synopsis": "As society rises from the ashes of war, cybernetically augmented arena fighters battle for fame and fortune... or die trying.\r\n\r\nIt's the 19th century, and the world has entered the Era of Rebirth, recovering from the devastating flames of war. The sport of mechanical martial arts has galvanized the nations. Cybernetically augmented fighters turn their blood into steam and their bodies into brutal fighting—and killing—machines.\r\n\r\nYoung Levius is one of those arena battlers, hell-bent on winning in order to simply survive. \r\n\r\n(Source: VIZ Media)",
    "type": "ONA",
    "airing_start": "2019-11-27T15:00:00+00:00",
    "episodes": null,
    "members": 1592,
    "genres": [
      {
        "mal_id": 1,
        "type": "anime",
        "name": "Action",
        "url": "https://myanimelist.net/anime/genre/1/Action"
      },
      {
        "mal_id": 24,
        "type": "anime",
        "name": "Sci-Fi",
        "url": "https://myanimelist.net/anime/genre/24/Sci-Fi"
      },
      {
        "mal_id": 17,
        "type": "anime",
        "name": "Martial Arts",
        "url": "https://myanimelist.net/anime/genre/17/Martial_Arts"
      },
      {
        "mal_id": 18,
        "type": "anime",
        "name": "Mecha",
        "url": "https://myanimelist.net/anime/genre/18/Mecha"
      },
      {
        "mal_id": 42,
        "type": "anime",
        "name": "Seinen",
        "url": "https://myanimelist.net/anime/genre/42/Seinen"
      }
    ],
    "source": "Manga",
    "producers": [
      {
        "mal_id": 1023,
        "type": "anime",
        "name": "Polygon Pictures",
        "url": "https://myanimelist.net/anime/producer/1023/Polygon_Pictures"
      }
    ],
    "score": null,
    "licensors": [],
    "r18": false,
    "kids": false,
    "continuing": false
  },
  {
    "mal_id": 40438,
    "url": "https://myanimelist.net/anime/40438/Obsolete",
    "title": "Obsolete",
    "image_url": "https://cdn.myanimelist.net/images/anime/1711/103227.jpg?s=1c87d1619d5302ccc652b3e843fe3e07",
    "synopsis": "In 2014, aliens revealed themselves to request trade with humanity. In exchange for limestone, they would provide a consciousness-controlled general-use robot known as an \"Exoframe.\" Cheaper than an aircraft, tank, or firearm, and easy enough for anyone to operate, the \"Exoframe\" spreads change throughout the world in the blink of an eye... \r\n\r\n(Source: Official site)",
    "type": "ONA",
    "airing_start": null,
    "episodes": null,
    "members": 1152,
    "genres": [
      {
        "mal_id": 18,
        "type": "anime",
        "name": "Mecha",
        "url": "https://myanimelist.net/anime/genre/18/Mecha"
      }
    ],
    "source": "Original",
    "producers": [
      {
        "mal_id": 1279,
        "type": "anime",
        "name": "Buemon",
        "url": "https://myanimelist.net/anime/producer/1279/Buemon"
      }
    ],
    "score": null,
    "licensors": [],
    "r18": false,
    "kids": false,
    "continuing": false
  },
  {
    "mal_id": 40517,
    "url": "https://myanimelist.net/anime/40517/Ano_Hi_no_Kokoro_wo_Toraete",
    "title": "Ano Hi no Kokoro wo Toraete",
    "image_url": "https://cdn.myanimelist.net/images/anime/1264/103452.jpg?s=5a8d72ddd58586ffa13fc0e2a361ea8f",
    "synopsis": "The story is set in a town that preserves nature and its natural attractions using technology. It centers on a protagonist who has drifted apart from his childhood friend, and uses the FlatFormer to reconnect through time and space. \r\n\r\n(Source: ANN)",
    "type": "ONA",
    "airing_start": "2019-10-22T15:00:00+00:00",
    "episodes": 1,
    "members": 68,
    "genres": [
      {
        "mal_id": 24,
        "type": "anime",
        "name": "Sci-Fi",
        "url": "https://myanimelist.net/anime/genre/24/Sci-Fi"
      },
      {
        "mal_id": 8,
        "type": "anime",
        "name": "Drama",
        "url": "https://myanimelist.net/anime/genre/8/Drama"
      }
    ],
    "source": "Original",
    "producers": [
      {
        "mal_id": 14,
        "type": "anime",
        "name": "Sunrise",
        "url": "https://myanimelist.net/anime/producer/14/Sunrise"
      }
    ],
    "score": null,
    "licensors": [],
    "r18": false,
    "kids": false,
    "continuing": false
  },
  {
    "mal_id": 39849,
    "url": "https://myanimelist.net/anime/39849/Kyouryuu_Shoujo_Gauko",
    "title": "Kyouryuu Shoujo Gauko",
    "image_url": "https://cdn.myanimelist.net/images/anime/1158/101098.jpg?s=4aeccfce6b5eefee84800e23f0247012",
    "synopsis": "The comedy series is set in Japan and follows Naoko Watanabe, a typical tween girl aside from the fact that she possesses strange and sometimes troubling powers. When her anger exceeds a maximum level, she turns into Gauko, the fire-breathing dinosaur girl. \r\n\r\n(Source: Variety)",
    "type": "ONA",
    "airing_start": "2019-11-21T15:00:00+00:00",
    "episodes": 20,
    "members": 14,
    "genres": [
      {
        "mal_id": 4,
        "type": "anime",
        "name": "Comedy",
        "url": "https://myanimelist.net/anime/genre/4/Comedy"
      },
      {
        "mal_id": 31,
        "type": "anime",
        "name": "Super Power",
        "url": "https://myanimelist.net/anime/genre/31/Super_Power"
      }
    ],
    "source": "Original",
    "producers": [],
    "score": null,
    "licensors": [],
    "r18": false,
    "kids": false,
    "continuing": false
  },
  {
    "mal_id": 39819,
    "url": "https://myanimelist.net/anime/39819/Bokutachi_wa_Benkyou_ga_Dekinai_OVA",
    "title": "Bokutachi wa Benkyou ga Dekinai OVA",
    "image_url": "https://cdn.myanimelist.net/images/anime/1530/102782.jpg?s=fe83a761ae98fd855a6ebb22e009c876",
    "synopsis": "Bundled with the limited edition volume 14 and volume 16. \r\n\r\nThe first episode will cover the chapter 48-49 where it centers on Yuiga and Asumi faking a date on the beach, and later Yuiga meets his teacher Mafuyu Kirisu hiding since she accidentally lost her bikini top.\r\n\r\nThe second episode will feature all five main female leads in a wedding ceremony.\r\n\r\n(Source: ANN)",
    "type": "OVA",
    "airing_start": "2019-10-31T15:00:00+00:00",
    "episodes": 2,
    "members": 18852,
    "genres": [
      {
        "mal_id": 35,
        "type": "anime",
        "name": "Harem",
        "url": "https://myanimelist.net/anime/genre/35/Harem"
      },
      {
        "mal_id": 4,
        "type": "anime",
        "name": "Comedy",
        "url": "https://myanimelist.net/anime/genre/4/Comedy"
      },
      {
        "mal_id": 22,
        "type": "anime",
        "name": "Romance",
        "url": "https://myanimelist.net/anime/genre/22/Romance"
      },
      {
        "mal_id": 23,
        "type": "anime",
        "name": "School",
        "url": "https://myanimelist.net/anime/genre/23/School"
      },
      {
        "mal_id": 27,
        "type": "anime",
        "name": "Shounen",
        "url": "https://myanimelist.net/anime/genre/27/Shounen"
      }
    ],
    "source": "Manga",
    "producers": [],
    "score": 7.48,
    "licensors": [],
    "r18": false,
    "kids": false,
    "continuing": false
  },
  {
    "mal_id": 39382,
    "url": "https://myanimelist.net/anime/39382/Mayonaka_no_Occult_Koumuin__Fukurokouji_to_Ano_Ko_to_Ore_to",
    "title": "Mayonaka no Occult Koumuin: Fukurokouji to Ano Ko to Ore to",
    "image_url": "https://cdn.myanimelist.net/images/anime/1530/101615.jpg?s=238b4ccf5c3cba72a514e07401b79df9",
    "synopsis": "Bundled with the limited edition 12th manga volume.",
    "type": "OVA",
    "airing_start": "2019-11-21T15:00:00+00:00",
    "episodes": 1,
    "members": 2247,
    "genres": [
      {
        "mal_id": 7,
        "type": "anime",
        "name": "Mystery",
        "url": "https://myanimelist.net/anime/genre/7/Mystery"
      },
      {
        "mal_id": 6,
        "type": "anime",
        "name": "Demons",
        "url": "https://myanimelist.net/anime/genre/6/Demons"
      },
      {
        "mal_id": 37,
        "type": "anime",
        "name": "Supernatural",
        "url": "https://myanimelist.net/anime/genre/37/Supernatural"
      },
      {
        "mal_id": 10,
        "type": "anime",
        "name": "Fantasy",
        "url": "https://myanimelist.net/anime/genre/10/Fantasy"
      },
      {
        "mal_id": 25,
        "type": "anime",
        "name": "Shoujo",
        "url": "https://myanimelist.net/anime/genre/25/Shoujo"
      }
    ],
    "source": "Manga",
    "producers": [],
    "score": null,
    "licensors": [],
    "r18": false,
    "kids": false,
    "continuing": false
  },
  {
    "mal_id": 40048,
    "url": "https://myanimelist.net/anime/40048/Kutsujoku",
    "title": "Kutsujoku",
    "image_url": "https://cdn.myanimelist.net/images/anime/1143/104167.jpg?s=f9ca6e29357e9c5be8851e5cf98f4370",
    "synopsis": "(No synopsis yet.)",
    "type": "OVA",
    "airing_start": "2019-10-31T15:00:00+00:00",
    "episodes": 2,
    "members": 778,
    "genres": [
      {
        "mal_id": 12,
        "type": "anime",
        "name": "Hentai",
        "url": "https://myanimelist.net/anime/genre/12/Hentai"
      }
    ],
    "source": "Visual novel",
    "producers": [
      {
        "mal_id": 405,
        "type": "anime",
        "name": "T-Rex",
        "url": "https://myanimelist.net/anime/producer/405/T-Rex"
      }
    ],
    "score": 6.82,
    "licensors": [],
    "r18": true,
    "kids": false,
    "continuing": false
  },
  {
    "mal_id": 40337,
    "url": "https://myanimelist.net/anime/40337/Aibeya_The_Animation",
    "title": "Aibeya The Animation",
    "image_url": "https://cdn.myanimelist.net/images/anime/1419/103707.jpg?s=e4a48bfb344398455c435fdb929f8a46",
    "synopsis": "(No synopsis yet.)",
    "type": "OVA",
    "airing_start": "2019-11-28T15:00:00+00:00",
    "episodes": 1,
    "members": 720,
    "genres": [
      {
        "mal_id": 12,
        "type": "anime",
        "name": "Hentai",
        "url": "https://myanimelist.net/anime/genre/12/Hentai"
      }
    ],
    "source": "Visual novel",
    "producers": [],
    "score": null,
    "licensors": [],
    "r18": true,
    "kids": false,
    "continuing": false
  },
  {
    "mal_id": 40212,
    "url": "https://myanimelist.net/anime/40212/Shigokare__Ecchi_na_Joshi_Daisei_to_Doki_x2_Love_Lesson_The_Animation",
    "title": "Shigokare: Ecchi na Joshi Daisei to Doki x2 Love Lesson!! The Animation",
    "image_url": "https://cdn.myanimelist.net/images/anime/1428/102431.jpg?s=ad6e278987be75d38f23321722caac36",
    "synopsis": "(No synopsis yet.)",
    "type": "OVA",
    "airing_start": "2019-10-24T15:00:00+00:00",
    "episodes": null,
    "members": 676,
    "genres": [
      {
        "mal_id": 12,
        "type": "anime",
        "name": "Hentai",
        "url": "https://myanimelist.net/anime/genre/12/Hentai"
      }
    ],
    "source": "Visual novel",
    "producers": [],
    "score": 6.54,
    "licensors": [],
    "r18": true,
    "kids": false,
    "continuing": false
  },
  {
    "mal_id": 40472,
    "url": "https://myanimelist.net/anime/40472/Boku_to_Joi_no_Shinsatsu_Nisshi_The_Animation",
    "title": "Boku to Joi no Shinsatsu Nisshi The Animation",
    "image_url": "https://cdn.myanimelist.net/images/anime/1597/103349.jpg?s=ec625fe9170d698f76e0905e3d6f63d1",
    "synopsis": "(No synopsis yet.)",
    "type": "OVA",
    "airing_start": "2019-12-19T15:00:00+00:00",
    "episodes": 1,
    "members": 403,
    "genres": [
      {
        "mal_id": 12,
        "type": "anime",
        "name": "Hentai",
        "url": "https://myanimelist.net/anime/genre/12/Hentai"
      }
    ],
    "source": "Visual novel",
    "producers": [],
    "score": null,
    "licensors": [],
    "r18": true,
    "kids": false,
    "continuing": false
  },
  {
    "mal_id": 40336,
    "url": "https://myanimelist.net/anime/40336/Love_x_Holic__Miwaku_no_Otome_to_Hakudaku_Kankei_-_The_Animation",
    "title": "Love x Holic: Miwaku no Otome to Hakudaku Kankei - The Animation",
    "image_url": "https://cdn.myanimelist.net/images/anime/1638/103708.jpg?s=4c2ee6698b07d4739851f4fbfa42ea74",
    "synopsis": "(No synopsis yet.)",
    "type": "OVA",
    "airing_start": "2019-11-28T15:00:00+00:00",
    "episodes": 2,
    "members": 360,
    "genres": [
      {
        "mal_id": 12,
        "type": "anime",
        "name": "Hentai",
        "url": "https://myanimelist.net/anime/genre/12/Hentai"
      },
      {
        "mal_id": 6,
        "type": "anime",
        "name": "Demons",
        "url": "https://myanimelist.net/anime/genre/6/Demons"
      },
      {
        "mal_id": 37,
        "type": "anime",
        "name": "Supernatural",
        "url": "https://myanimelist.net/anime/genre/37/Supernatural"
      },
      {
        "mal_id": 10,
        "type": "anime",
        "name": "Fantasy",
        "url": "https://myanimelist.net/anime/genre/10/Fantasy"
      }
    ],
    "source": "Visual novel",
    "producers": [],
    "score": null,
    "licensors": [],
    "r18": true,
    "kids": false,
    "continuing": false
  },
  {
    "mal_id": 39735,
    "url": "https://myanimelist.net/anime/39735/Sousaku_no_Ima__Baja",
    "title": "Sousaku no, Ima!!: Baja",
    "image_url": "https://cdn.myanimelist.net/images/anime/1499/100626.jpg?s=109289ca4b5a5e1a7fafe003ccce391e",
    "synopsis": "Kyoto Animation announced on Saturday that it is making a new anime project based on its mascot character Baja. The new animation will be included in a Blu-ray Disc that the studio is offering to those who pre-order tickets for its upcoming \"We're Here Now!!: It's the First Festival in Two Years\" fan event with Animation DO. It will also offer the Blu-ray Disc for sale separately at a later date. \r\n\r\n(Source: ANN)",
    "type": "OVA",
    "airing_start": "2019-11-02T15:00:00+00:00",
    "episodes": 1,
    "members": 295,
    "genres": [
      {
        "mal_id": 15,
        "type": "anime",
        "name": "Kids",
        "url": "https://myanimelist.net/anime/genre/15/Kids"
      }
    ],
    "source": "Original",
    "producers": [],
    "score": null,
    "licensors": [],
    "r18": false,
    "kids": true,
    "continuing": false
  },
  {
    "mal_id": 40023,
    "url": "https://myanimelist.net/anime/40023/Lovely_Heart",
    "title": "Lovely Heart",
    "image_url": "https://cdn.myanimelist.net/images/anime/1969/103710.jpg?s=2c46ff2aff201f56dba1ef9067cb66f0",
    "synopsis": "(No synopsis yet.)",
    "type": "OVA",
    "airing_start": "2019-11-07T15:00:00+00:00",
    "episodes": null,
    "members": 273,
    "genres": [
      {
        "mal_id": 12,
        "type": "anime",
        "name": "Hentai",
        "url": "https://myanimelist.net/anime/genre/12/Hentai"
      }
    ],
    "source": "Manga",
    "producers": [],
    "score": null,
    "licensors": [],
    "r18": true,
    "kids": false,
    "continuing": false
  },
  {
    "mal_id": 40398,
    "url": "https://myanimelist.net/anime/40398/Hitozuma_Mitsu_to_Niku",
    "title": "Hitozuma, Mitsu to Niku",
    "image_url": "https://cdn.myanimelist.net/images/anime/1710/103706.jpg?s=9f1a47cd347c5f4f456d515648def6e4",
    "synopsis": "(No synopsis yet.)",
    "type": "OVA",
    "airing_start": "2019-11-28T15:00:00+00:00",
    "episodes": null,
    "members": 208,
    "genres": [
      {
        "mal_id": 12,
        "type": "anime",
        "name": "Hentai",
        "url": "https://myanimelist.net/anime/genre/12/Hentai"
      }
    ],
    "source": "Manga",
    "producers": [],
    "score": null,
    "licensors": [],
    "r18": true,
    "kids": false,
    "continuing": false
  },
  {
    "mal_id": 40521,
    "url": "https://myanimelist.net/anime/40521/Kiss_Hug",
    "title": "Kiss Hug",
    "image_url": "https://cdn.myanimelist.net/images/qm_50.gif?s=ae2bf25a5159e965ebb3aa7f9442fa80",
    "synopsis": "(No synopsis yet.)",
    "type": "OVA",
    "airing_start": "2019-12-12T15:00:00+00:00",
    "episodes": null,
    "members": 151,
    "genres": [
      {
        "mal_id": 12,
        "type": "anime",
        "name": "Hentai",
        "url": "https://myanimelist.net/anime/genre/12/Hentai"
      }
    ],
    "source": "Manga",
    "producers": [],
    "score": null,
    "licensors": [],
    "r18": true,
    "kids": false,
    "continuing": false
  },
  {
    "mal_id": 40471,
    "url": "https://myanimelist.net/anime/40471/Nozoki_Kanojo",
    "title": "Nozoki Kanojo",
    "image_url": "https://cdn.myanimelist.net/images/qm_50.gif?s=ae2bf25a5159e965ebb3aa7f9442fa80",
    "synopsis": "(No synopsis yet.)",
    "type": "OVA",
    "airing_start": "2019-12-26T15:00:00+00:00",
    "episodes": null,
    "members": 141,
    "genres": [
      {
        "mal_id": 12,
        "type": "anime",
        "name": "Hentai",
        "url": "https://myanimelist.net/anime/genre/12/Hentai"
      }
    ],
    "source": "Original",
    "producers": [],
    "score": null,
    "licensors": [],
    "r18": true,
    "kids": false,
    "continuing": false
  },
  {
    "mal_id": 39565,
    "url": "https://myanimelist.net/anime/39565/Boku_no_Hero_Academia_the_Movie_2__Heroes_Rising",
    "title": "Boku no Hero Academia the Movie 2: Heroes:Rising",
    "image_url": "https://cdn.myanimelist.net/images/anime/1019/103292.jpg?s=7aa997210e8af72be4ffcef6d2b6f821",
    "synopsis": "(No synopsis yet.)",
    "type": "Movie",
    "airing_start": "2019-12-19T15:00:00+00:00",
    "episodes": 1,
    "members": 68831,
    "genres": [
      {
        "mal_id": 1,
        "type": "anime",
        "name": "Action",
        "url": "https://myanimelist.net/anime/genre/1/Action"
      },
      {
        "mal_id": 4,
        "type": "anime",
        "name": "Comedy",
        "url": "https://myanimelist.net/anime/genre/4/Comedy"
      },
      {
        "mal_id": 31,
        "type": "anime",
        "name": "Super Power",
        "url": "https://myanimelist.net/anime/genre/31/Super_Power"
      },
      {
        "mal_id": 23,
        "type": "anime",
        "name": "School",
        "url": "https://myanimelist.net/anime/genre/23/School"
      },
      {
        "mal_id": 27,
        "type": "anime",
        "name": "Shounen",
        "url": "https://myanimelist.net/anime/genre/27/Shounen"
      }
    ],
    "source": "Manga",
    "producers": [
      {
        "mal_id": 4,
        "type": "anime",
        "name": "Bones",
        "url": "https://myanimelist.net/anime/producer/4/Bones"
      }
    ],
    "score": null,
    "licensors": [],
    "r18": false,
    "kids": false,
    "continuing": false
  },
  {
    "mal_id": 38414,
    "url": "https://myanimelist.net/anime/38414/Re_Zero_kara_Hajimeru_Isekai_Seikatsu_-_Hyouketsu_no_Kizuna",
    "title": "Re:Zero kara Hajimeru Isekai Seikatsu - Hyouketsu no Kizuna",
    "image_url": "https://cdn.myanimelist.net/images/anime/1420/104030.jpg?s=1a9c7caaa5a68baab6c12e547107efc2",
    "synopsis": "During the Re:Zero kara Hajimeru Isekai Seikatsu: Memory Snow OVA pre-screening event, it was announced that Re:Zero franchise will get another OVA. It will adapt the prequel novel \"Hyouketsu no Kizuna\" which was included in first Blu-ray and DVD volume of the TV series. The episode will revolve around Emilia and her meeting with Pack during the journey to Roswaal Mansion to be a candidate for the royal election.\r\n\r\n(Source: MAL News)",
    "type": "Movie",
    "airing_start": "2019-11-07T15:00:00+00:00",
    "episodes": 1,
    "members": 51342,
    "genres": [
      {
        "mal_id": 40,
        "type": "anime",
        "name": "Psychological",
        "url": "https://myanimelist.net/anime/genre/40/Psychological"
      },
      {
        "mal_id": 8,
        "type": "anime",
        "name": "Drama",
        "url": "https://myanimelist.net/anime/genre/8/Drama"
      },
      {
        "mal_id": 41,
        "type": "anime",
        "name": "Thriller",
        "url": "https://myanimelist.net/anime/genre/41/Thriller"
      },
      {
        "mal_id": 10,
        "type": "anime",
        "name": "Fantasy",
        "url": "https://myanimelist.net/anime/genre/10/Fantasy"
      }
    ],
    "source": "Light novel",
    "producers": [
      {
        "mal_id": 314,
        "type": "anime",
        "name": "White Fox",
        "url": "https://myanimelist.net/anime/producer/314/White_Fox"
      }
    ],
    "score": null,
    "licensors": [],
    "r18": false,
    "kids": false,
    "continuing": false
  },
  {
    "mal_id": 37498,
    "url": "https://myanimelist.net/anime/37498/Black_Fox",
    "title": "Black Fox",
    "image_url": "https://cdn.myanimelist.net/images/anime/1217/103378.jpg?s=56b486b9831737a818942641421a4d21",
    "synopsis": "Rikka Isurugi has spent her life training in the way of the ninja with her grandfather Hyoe while following in the footsteps of her father, the esteemed researcher Allen. His work has culminated in a set of cutting- edge drones equipped with artificial intelligence and incredible technical capabilities; although Allen plans to develop these drones for civilian use, there are others who have more sinister ideas in mind.\r\n\r\nOn Rikka's 16th birthday, things are forever changed when a paramilitary group raids the Isurugi house in search of the drone technology, killing Allen and Hyoe while Rikka manages to escape with the drones. Months pass, and Rikka is now an ordinary girl working as a private detective while sharing an apartment with another girl, Melissa. But when night falls, she dons her grandfather's fox mask and mercilessly hunts down those responsible for the attack. With the anger she felt that day driving her forward, Rikka will not rest until her family's killers receive the justice that they deserve.\r\n\r\n[Written by MAL Rewrite]",
    "type": "Movie",
    "airing_start": "2019-10-04T15:00:00+00:00",
    "episodes": 1,
    "members": 40160,
    "genres": [
      {
        "mal_id": 1,
        "type": "anime",
        "name": "Action",
        "url": "https://myanimelist.net/anime/genre/1/Action"
      }
    ],
    "source": "Original",
    "producers": [
      {
        "mal_id": 1127,
        "type": "anime",
        "name": "Studio 3Hz",
        "url": "https://myanimelist.net/anime/producer/1127/Studio_3Hz"
      }
    ],
    "score": 7.04,
    "licensors": [],
    "r18": false,
    "kids": false,
    "continuing": false
  },
  {
    "mal_id": 36885,
    "url": "https://myanimelist.net/anime/36885/Saenai_Heroine_no_Sodatekata_Fine",
    "title": "Saenai Heroine no Sodatekata Fine",
    "image_url": "https://cdn.myanimelist.net/images/anime/1306/102763.jpg?s=35de2371fdacf0f3894e98ac82f5e250",
    "synopsis": "(No synopsis yet.)",
    "type": "Movie",
    "airing_start": "2019-10-25T15:00:00+00:00",
    "episodes": 1,
    "members": 37076,
    "genres": [
      {
        "mal_id": 4,
        "type": "anime",
        "name": "Comedy",
        "url": "https://myanimelist.net/anime/genre/4/Comedy"
      },
      {
        "mal_id": 9,
        "type": "anime",
        "name": "Ecchi",
        "url": "https://myanimelist.net/anime/genre/9/Ecchi"
      },
      {
        "mal_id": 35,
        "type": "anime",
        "name": "Harem",
        "url": "https://myanimelist.net/anime/genre/35/Harem"
      },
      {
        "mal_id": 22,
        "type": "anime",
        "name": "Romance",
        "url": "https://myanimelist.net/anime/genre/22/Romance"
      },
      {
        "mal_id": 23,
        "type": "anime",
        "name": "School",
        "url": "https://myanimelist.net/anime/genre/23/School"
      }
    ],
    "source": "Light novel",
    "producers": [
      {
        "mal_id": 1835,
        "type": "anime",
        "name": "CloverWorks",
        "url": "https://myanimelist.net/anime/producer/1835/CloverWorks"
      }
    ],
    "score": 7.54,
    "licensors": [],
    "r18": false,
    "kids": false,
    "continuing": false
  },
  {
    "mal_id": 39569,
    "url": "https://myanimelist.net/anime/39569/Sora_no_Aosa_wo_Shiru_Hito_yo",
    "title": "Sora no Aosa wo Shiru Hito yo",
    "image_url": "https://cdn.myanimelist.net/images/anime/1468/102527.jpg?s=135d667774e912d4b80ee8e74558e0dc",
    "synopsis": "Set in the same Chichibu city as Ano Hi Mita Hana no Namae wo Bokutachi wa Mada Shiranai. its story follows two Aioi sisters, Akane and Aoi, who have lived together since their parents' passing 13 years ago. One day, older sister Akane's ex-boyfriend Shinnosuke Kanemuro, who is 31 now, visits the city to perform at a festival. At the same time, 18-year-old Shinnosuke, called Shinno, also time-travels from 13 years ago. While Aoi starts falling love with the 18-year-old Shinno, Akane and the 31-year-old Shinnosuke finally reunite...\r\n\r\n(Source: Crunchyroll)",
    "type": "Movie",
    "airing_start": "2019-10-10T15:00:00+00:00",
    "episodes": 1,
    "members": 15048,
    "genres": [
      {
        "mal_id": 8,
        "type": "anime",
        "name": "Drama",
        "url": "https://myanimelist.net/anime/genre/8/Drama"
      }
    ],
    "source": "Original",
    "producers": [
      {
        "mal_id": 1835,
        "type": "anime",
        "name": "CloverWorks",
        "url": "https://myanimelist.net/anime/producer/1835/CloverWorks"
      }
    ],
    "score": 7.39,
    "licensors": [],
    "r18": false,
    "kids": false,
    "continuing": false
  },
  {
    "mal_id": 39584,
    "url": "https://myanimelist.net/anime/39584/Human_Lost__Ningen_Shikkaku",
    "title": "Human Lost: Ningen Shikkaku",
    "image_url": "https://cdn.myanimelist.net/images/anime/1120/103060.jpg?s=efa76074245b153c0a32d2789114e356",
    "synopsis": "\"Mine has been a life of much shame.\"\r\n\r\nTokyo, 2036 (Showa year 111): a revolution in medical treatment has conquered death...\r\nBy means of internal nanomachines and the \"S.H.E.L.L.\" system whose network controls them, human beings suffer no diseases, require no treatment for injuries, and are guaranteed a 120-year lifespan, free from illness. Yet this consummate social system warps the Japanese nation in a host of ways: unresolved economic disparities, ethical decadence resulting from deathlessness, grave environmental pollution, and the \"Human Lost\" phenomenon, in which people themselves, disconnected from the S.H.E.L.L. network, become malformed. Japan teeters wildly between two potential futures: civilization's restoration or its destruction.\r\n\r\nAtmospheric pollution suffuses \"Route 16\" in the Outside—the area outside the Route 16 beltway. Youzou Oba, who lives an idle, drug-saturated life, joins Masao Horiki, a mysterious man who associates with the drag-racing gangs, on an incursion Inside—the area within the Route 7 loop where the privileged class lives—only to be embroiled in a violent struggle. When he encounters a malformed sufferer of the Human Lost phenomenon, a \"Lost,\" Youzou's life is saved by Yoshiko Hiiragi, a girl of mysterious abilities who belongs to the anti-Lost agency H.I.L.A.M., and he discovers that he himself also possesses extraordinary powers...\r\n\r\nDegradation and death. Life and hope. Buffeted by fate, a man tears himself apart and cries out. Rage. Sorrow. Pathos. Consumed by despair and bitter tears, Youzou Oba is himself transformed into a demon. A human lost... or a human who can find himself? \r\n\r\n(Source: Official Site)",
    "type": "Movie",
    "airing_start": "2019-10-21T15:00:00+00:00",
    "episodes": 1,
    "members": 9337,
    "genres": [
      {
        "mal_id": 13,
        "type": "anime",
        "name": "Historical",
        "url": "https://myanimelist.net/anime/genre/13/Historical"
      },
      {
        "mal_id": 40,
        "type": "anime",
        "name": "Psychological",
        "url": "https://myanimelist.net/anime/genre/40/Psychological"
      },
      {
        "mal_id": 8,
        "type": "anime",
        "name": "Drama",
        "url": "https://myanimelist.net/anime/genre/8/Drama"
      },
      {
        "mal_id": 42,
        "type": "anime",
        "name": "Seinen",
        "url": "https://myanimelist.net/anime/genre/42/Seinen"
      }
    ],
    "source": "Novel",
    "producers": [
      {
        "mal_id": 1023,
        "type": "anime",
        "name": "Polygon Pictures",
        "url": "https://myanimelist.net/anime/producer/1023/Polygon_Pictures"
      }
    ],
    "score": 6.02,
    "licensors": [
      "Funimation"
    ],
    "r18": false,
    "kids": false,
    "continuing": false
  },
  {
    "mal_id": 39545,
    "url": "https://myanimelist.net/anime/39545/Fragtime",
    "title": "Fragtime",
    "image_url": "https://cdn.myanimelist.net/images/anime/1134/102375.jpg?s=7c99cec2d5a008371d147835acb4019e",
    "synopsis": "What would you do if you could stop time? Moritani for one is using her unusual ability to stop time for three minutes a day to observe the people around her. One day, she chooses to \"observe\" class idol Murakami's panties—only to find herself in a very compromising situation when her classmate turns out to be immune to her power.\r\n \r\n(Source: Yuri Project)",
    "type": "Movie",
    "airing_start": "2019-11-21T15:00:00+00:00",
    "episodes": null,
    "members": 8437,
    "genres": [
      {
        "mal_id": 24,
        "type": "anime",
        "name": "Sci-Fi",
        "url": "https://myanimelist.net/anime/genre/24/Sci-Fi"
      },
      {
        "mal_id": 36,
        "type": "anime",
        "name": "Slice of Life",
        "url": "https://myanimelist.net/anime/genre/36/Slice_of_Life"
      },
      {
        "mal_id": 22,
        "type": "anime",
        "name": "Romance",
        "url": "https://myanimelist.net/anime/genre/22/Romance"
      },
      {
        "mal_id": 23,
        "type": "anime",
        "name": "School",
        "url": "https://myanimelist.net/anime/genre/23/School"
      },
      {
        "mal_id": 26,
        "type": "anime",
        "name": "Shoujo Ai",
        "url": "https://myanimelist.net/anime/genre/26/Shoujo_Ai"
      }
    ],
    "source": "Manga",
    "producers": [
      {
        "mal_id": 1890,
        "type": "anime",
        "name": "tear-studio",
        "url": "https://myanimelist.net/anime/producer/1890/tear-studio"
      }
    ],
    "score": null,
    "licensors": [],
    "r18": false,
    "kids": false,
    "continuing": false
  },
  {
    "mal_id": 37828,
    "url": "https://myanimelist.net/anime/37828/Bokura_no_Nanokakan_Sensou",
    "title": "Bokura no Nanokakan Sensou",
    "image_url": "https://cdn.myanimelist.net/images/anime/1887/103944.jpg?s=aa8bbf454dcb3ef78df3cb5e413cbc96",
    "synopsis": "On a hot day right before the summer vacation, all first-year male students of the second class from a junior high school disappear. Was it an accident? A group abduction? In fact, they were hiding in an abandoned factory near the river, and used it as a liberation area to rebel against the adults. The adults are in great confusion by the huge and unexpected operations cooperated by the female students; entangled with real abduction cases, a corrupted mayor election, and even involving parents and television reporters who are thrilled by the liberation broadcast and barricade. The comedy mystery progresses in a light tempo that doesn't give the audience a chance to breathe until the brilliant end that is full of satire.\r\n\r\n(Source: MAL News)",
    "type": "Movie",
    "airing_start": "2019-12-12T15:00:00+00:00",
    "episodes": null,
    "members": 7909,
    "genres": [
      {
        "mal_id": 1,
        "type": "anime",
        "name": "Action",
        "url": "https://myanimelist.net/anime/genre/1/Action"
      },
      {
        "mal_id": 4,
        "type": "anime",
        "name": "Comedy",
        "url": "https://myanimelist.net/anime/genre/4/Comedy"
      },
      {
        "mal_id": 8,
        "type": "anime",
        "name": "Drama",
        "url": "https://myanimelist.net/anime/genre/8/Drama"
      },
      {
        "mal_id": 41,
        "type": "anime",
        "name": "Thriller",
        "url": "https://myanimelist.net/anime/genre/41/Thriller"
      }
    ],
    "source": "Novel",
    "producers": [
      {
        "mal_id": 30,
        "type": "anime",
        "name": "Ajia-Do",
        "url": "https://myanimelist.net/anime/producer/30/Ajia-Do"
      }
    ],
    "score": null,
    "licensors": [],
    "r18": false,
    "kids": false,
    "continuing": false
  },
  {
    "mal_id": 36370,
    "url": "https://myanimelist.net/anime/36370/Ginga_Eiyuu_Densetsu__Die_Neue_These_-_Seiran_2",
    "title": "Ginga Eiyuu Densetsu: Die Neue These - Seiran 2",
    "image_url": "https://cdn.myanimelist.net/images/anime/1215/103351.jpg?s=e65ae23ebfdf8cafbd07bfa15c05f891",
    "synopsis": "(No synopsis yet.)",
    "type": "Movie",
    "airing_start": "2019-10-24T15:00:00+00:00",
    "episodes": 4,
    "members": 6475,
    "genres": [
      {
        "mal_id": 1,
        "type": "anime",
        "name": "Action",
        "url": "https://myanimelist.net/anime/genre/1/Action"
      },
      {
        "mal_id": 38,
        "type": "anime",
        "name": "Military",
        "url": "https://myanimelist.net/anime/genre/38/Military"
      },
      {
        "mal_id": 24,
        "type": "anime",
        "name": "Sci-Fi",
        "url": "https://myanimelist.net/anime/genre/24/Sci-Fi"
      },
      {
        "mal_id": 29,
        "type": "anime",
        "name": "Space",
        "url": "https://myanimelist.net/anime/genre/29/Space"
      },
      {
        "mal_id": 8,
        "type": "anime",
        "name": "Drama",
        "url": "https://myanimelist.net/anime/genre/8/Drama"
      }
    ],
    "source": "Novel",
    "producers": [
      {
        "mal_id": 10,
        "type": "anime",
        "name": "Production I.G",
        "url": "https://myanimelist.net/anime/producer/10/Production_IG"
      }
    ],
    "score": 7.89,
    "licensors": [],
    "r18": false,
    "kids": false,
    "continuing": false
  },
  {
    "mal_id": 36371,
    "url": "https://myanimelist.net/anime/36371/Ginga_Eiyuu_Densetsu__Die_Neue_These_-_Seiran_3",
    "title": "Ginga Eiyuu Densetsu: Die Neue These - Seiran 3",
    "image_url": "https://cdn.myanimelist.net/images/anime/1782/103917.jpg?s=202d3bff1aa7ade0fac1a385afa35c64",
    "synopsis": "(No synopsis yet.)",
    "type": "Movie",
    "airing_start": "2019-11-28T15:00:00+00:00",
    "episodes": 4,
    "members": 5319,
    "genres": [
      {
        "mal_id": 1,
        "type": "anime",
        "name": "Action",
        "url": "https://myanimelist.net/anime/genre/1/Action"
      },
      {
        "mal_id": 38,
        "type": "anime",
        "name": "Military",
        "url": "https://myanimelist.net/anime/genre/38/Military"
      },
      {
        "mal_id": 24,
        "type": "anime",
        "name": "Sci-Fi",
        "url": "https://myanimelist.net/anime/genre/24/Sci-Fi"
      },
      {
        "mal_id": 29,
        "type": "anime",
        "name": "Space",
        "url": "https://myanimelist.net/anime/genre/29/Space"
      },
      {
        "mal_id": 8,
        "type": "anime",
        "name": "Drama",
        "url": "https://myanimelist.net/anime/genre/8/Drama"
      }
    ],
    "source": "Novel",
    "producers": [
      {
        "mal_id": 10,
        "type": "anime",
        "name": "Production I.G",
        "url": "https://myanimelist.net/anime/producer/10/Production_IG"
      }
    ],
    "score": null,
    "licensors": [],
    "r18": false,
    "kids": false,
    "continuing": false
  },
  {
    "mal_id": 40082,
    "url": "https://myanimelist.net/anime/40082/Lupin_III__The_First",
    "title": "Lupin III: The First",
    "image_url": "https://cdn.myanimelist.net/images/anime/1840/103598.jpg?s=b1e012d6c8d3cb0e3b686c3ce3a49a04",
    "synopsis": "The film's story, which centers on Lupin teaming up with a woman named Leticia to steal the Bresson Diary, a treasure that even the first generation Arsène Lupin could not steal.\r\n\r\n(Source: ANN)",
    "type": "Movie",
    "airing_start": "2019-12-05T15:00:00+00:00",
    "episodes": 1,
    "members": 4613,
    "genres": [
      {
        "mal_id": 1,
        "type": "anime",
        "name": "Action",
        "url": "https://myanimelist.net/anime/genre/1/Action"
      },
      {
        "mal_id": 2,
        "type": "anime",
        "name": "Adventure",
        "url": "https://myanimelist.net/anime/genre/2/Adventure"
      },
      {
        "mal_id": 7,
        "type": "anime",
        "name": "Mystery",
        "url": "https://myanimelist.net/anime/genre/7/Mystery"
      },
      {
        "mal_id": 4,
        "type": "anime",
        "name": "Comedy",
        "url": "https://myanimelist.net/anime/genre/4/Comedy"
      },
      {
        "mal_id": 42,
        "type": "anime",
        "name": "Seinen",
        "url": "https://myanimelist.net/anime/genre/42/Seinen"
      }
    ],
    "source": "Manga",
    "producers": [
      {
        "mal_id": 1296,
        "type": "anime",
        "name": "Marza Animation Planet",
        "url": "https://myanimelist.net/anime/producer/1296/Marza_Animation_Planet"
      },
      {
        "mal_id": 73,
        "type": "anime",
        "name": "TMS Entertainment",
        "url": "https://myanimelist.net/anime/producer/73/TMS_Entertainment"
      }
    ],
    "score": null,
    "licensors": [],
    "r18": false,
    "kids": false,
    "continuing": false
  },
  {
    "mal_id": 40335,
    "url": "https://myanimelist.net/anime/40335/Kimi_dake_ni_Motetainda",
    "title": "Kimi dake ni Motetainda.",
    "image_url": "https://cdn.myanimelist.net/images/anime/1454/102840.jpg?s=14fdc45488cb953d8625a855b44a437d",
    "synopsis": "The story revolves around five boys who each possess a trait that have negative effects on them. The handsome boys owe a monetary debt to Sakiko Horinomiya, a girl from a rich family. Wanting the money back, she makes them enter the \"Motemen Koshien\" contest, so they can pay her back using the prize money. \r\n\r\n(Source: MAL News)",
    "type": "Movie",
    "airing_start": "2019-10-24T15:00:00+00:00",
    "episodes": 1,
    "members": 3345,
    "genres": [
      {
        "mal_id": 36,
        "type": "anime",
        "name": "Slice of Life",
        "url": "https://myanimelist.net/anime/genre/36/Slice_of_Life"
      },
      {
        "mal_id": 8,
        "type": "anime",
        "name": "Drama",
        "url": "https://myanimelist.net/anime/genre/8/Drama"
      },
      {
        "mal_id": 23,
        "type": "anime",
        "name": "School",
        "url": "https://myanimelist.net/anime/genre/23/School"
      }
    ],
    "source": "Original",
    "producers": [
      {
        "mal_id": 1278,
        "type": "anime",
        "name": "Signal.MD",
        "url": "https://myanimelist.net/anime/producer/1278/SignalMD"
      }
    ],
    "score": null,
    "licensors": [],
    "r18": false,
    "kids": false,
    "continuing": false
  },
  {
    "mal_id": 39987,
    "url": "https://myanimelist.net/anime/39987/Strike_Witches__501_Butai_Hasshin_Shimasu_Movie",
    "title": "Strike Witches: 501 Butai Hasshin Shimasu! Movie",
    "image_url": "https://cdn.myanimelist.net/images/anime/1102/101638.jpg?s=3f168bfb9f6f7c25983477f25142e751",
    "synopsis": "(No synopsis yet.)",
    "type": "Movie",
    "airing_start": "2019-10-03T15:00:00+00:00",
    "episodes": 1,
    "members": 2124,
    "genres": [
      {
        "mal_id": 4,
        "type": "anime",
        "name": "Comedy",
        "url": "https://myanimelist.net/anime/genre/4/Comedy"
      },
      {
        "mal_id": 38,
        "type": "anime",
        "name": "Military",
        "url": "https://myanimelist.net/anime/genre/38/Military"
      },
      {
        "mal_id": 24,
        "type": "anime",
        "name": "Sci-Fi",
        "url": "https://myanimelist.net/anime/genre/24/Sci-Fi"
      },
      {
        "mal_id": 27,
        "type": "anime",
        "name": "Shounen",
        "url": "https://myanimelist.net/anime/genre/27/Shounen"
      }
    ],
    "source": "Manga",
    "producers": [],
    "score": null,
    "licensors": [],
    "r18": false,
    "kids": false,
    "continuing": false
  },
  {
    "mal_id": 40109,
    "url": "https://myanimelist.net/anime/40109/Soukyuu_no_Fafner__Dead_Aggressor_-_The_Beyond_Part_2",
    "title": "Soukyuu no Fafner: Dead Aggressor - The Beyond Part 2",
    "image_url": "https://cdn.myanimelist.net/images/anime/1276/102048.jpg?s=cbc21fe77fc7cc08eaa1c241652466c0",
    "synopsis": "Episodes 4-6 of the Soukyuu no Fafner: Dead Aggressor - The Beyond series. ",
    "type": "Movie",
    "airing_start": "2019-11-07T15:00:00+00:00",
    "episodes": 3,
    "members": 1402,
    "genres": [
      {
        "mal_id": 1,
        "type": "anime",
        "name": "Action",
        "url": "https://myanimelist.net/anime/genre/1/Action"
      },
      {
        "mal_id": 8,
        "type": "anime",
        "name": "Drama",
        "url": "https://myanimelist.net/anime/genre/8/Drama"
      },
      {
        "mal_id": 18,
        "type": "anime",
        "name": "Mecha",
        "url": "https://myanimelist.net/anime/genre/18/Mecha"
      },
      {
        "mal_id": 38,
        "type": "anime",
        "name": "Military",
        "url": "https://myanimelist.net/anime/genre/38/Military"
      },
      {
        "mal_id": 24,
        "type": "anime",
        "name": "Sci-Fi",
        "url": "https://myanimelist.net/anime/genre/24/Sci-Fi"
      }
    ],
    "source": "Original",
    "producers": [
      {
        "mal_id": 898,
        "type": "anime",
        "name": "IG Zwei",
        "url": "https://myanimelist.net/anime/producer/898/IG_Zwei"
      },
      {
        "mal_id": 10,
        "type": "anime",
        "name": "Production I.G",
        "url": "https://myanimelist.net/anime/producer/10/Production_IG"
      }
    ],
    "score": null,
    "licensors": [],
    "r18": false,
    "kids": false,
    "continuing": false
  },
  {
    "mal_id": 38714,
    "url": "https://myanimelist.net/anime/38714/Gundam__G_no_Reconguista_Movie",
    "title": "Gundam: G no Reconguista Movie",
    "image_url": "https://cdn.myanimelist.net/images/anime/1763/102345.jpg?s=bc4a21eb5761d2aceebdbf144afaca11",
    "synopsis": "(No synopsis yet.)",
    "type": "Movie",
    "airing_start": "2019-11-28T15:00:00+00:00",
    "episodes": 1,
    "members": 1172,
    "genres": [
      {
        "mal_id": 1,
        "type": "anime",
        "name": "Action",
        "url": "https://myanimelist.net/anime/genre/1/Action"
      },
      {
        "mal_id": 24,
        "type": "anime",
        "name": "Sci-Fi",
        "url": "https://myanimelist.net/anime/genre/24/Sci-Fi"
      },
      {
        "mal_id": 29,
        "type": "anime",
        "name": "Space",
        "url": "https://myanimelist.net/anime/genre/29/Space"
      },
      {
        "mal_id": 18,
        "type": "anime",
        "name": "Mecha",
        "url": "https://myanimelist.net/anime/genre/18/Mecha"
      }
    ],
    "source": "Original",
    "producers": [
      {
        "mal_id": 14,
        "type": "anime",
        "name": "Sunrise",
        "url": "https://myanimelist.net/anime/producer/14/Sunrise"
      }
    ],
    "score": null,
    "licensors": [],
    "r18": false,
    "kids": false,
    "continuing": false
  },
  {
    "mal_id": 38850,
    "url": "https://myanimelist.net/anime/38850/Star☆Twinkle_Precure__Hoshi_no_Uta_ni_Omoi_wo_Komete",
    "title": "Star☆Twinkle Precure: Hoshi no Uta ni Omoi wo Komete",
    "image_url": "https://cdn.myanimelist.net/images/anime/1324/101596.jpg?s=c6c540b24afa23aaa4c488a575d72180",
    "synopsis": "(No synopsis yet.)",
    "type": "Movie",
    "airing_start": "2019-10-18T15:00:00+00:00",
    "episodes": 1,
    "members": 964,
    "genres": [
      {
        "mal_id": 1,
        "type": "anime",
        "name": "Action",
        "url": "https://myanimelist.net/anime/genre/1/Action"
      },
      {
        "mal_id": 16,
        "type": "anime",
        "name": "Magic",
        "url": "https://myanimelist.net/anime/genre/16/Magic"
      },
      {
        "mal_id": 10,
        "type": "anime",
        "name": "Fantasy",
        "url": "https://myanimelist.net/anime/genre/10/Fantasy"
      },
      {
        "mal_id": 25,
        "type": "anime",
        "name": "Shoujo",
        "url": "https://myanimelist.net/anime/genre/25/Shoujo"
      }
    ],
    "source": "Original",
    "producers": [
      {
        "mal_id": 18,
        "type": "anime",
        "name": "Toei Animation",
        "url": "https://myanimelist.net/anime/producer/18/Toei_Animation"
      }
    ],
    "score": null,
    "licensors": [],
    "r18": false,
    "kids": false,
    "continuing": false
  },
  {
    "mal_id": 39931,
    "url": "https://myanimelist.net/anime/39931/Santa_Company__Christmas_no_Himitsu",
    "title": "Santa Company: Christmas no Himitsu",
    "image_url": "https://cdn.myanimelist.net/images/anime/1985/102720.jpg?s=fe4dfa37ea8593eec65c20de8c4ca5b7",
    "synopsis": "A feature-length version of the short anime film Santa Company.",
    "type": "Movie",
    "airing_start": "2019-11-28T15:00:00+00:00",
    "episodes": 1,
    "members": 561,
    "genres": [
      {
        "mal_id": 10,
        "type": "anime",
        "name": "Fantasy",
        "url": "https://myanimelist.net/anime/genre/10/Fantasy"
      }
    ],
    "source": "Original",
    "producers": [
      {
        "mal_id": 406,
        "type": "anime",
        "name": "Asahi Production",
        "url": "https://myanimelist.net/anime/producer/406/Asahi_Production"
      }
    ],
    "score": null,
    "licensors": [],
    "r18": false,
    "kids": false,
    "continuing": false
  },
  {
    "mal_id": 39967,
    "url": "https://myanimelist.net/anime/39967/Shinkansen_Henkei_Robo_Shinkalion__Mirai_kara_Kita_Shinsoku_no_ALFA-X",
    "title": "Shinkansen Henkei Robo Shinkalion: Mirai kara Kita Shinsoku no ALFA-X",
    "image_url": "https://cdn.myanimelist.net/images/anime/1445/101804.jpg?s=aaebcef0e9fc259c70f152436d46dd5e",
    "synopsis": "(No synopsis yet.)",
    "type": "Movie",
    "airing_start": "2019-12-26T15:00:00+00:00",
    "episodes": 1,
    "members": 412,
    "genres": [
      {
        "mal_id": 1,
        "type": "anime",
        "name": "Action",
        "url": "https://myanimelist.net/anime/genre/1/Action"
      },
      {
        "mal_id": 24,
        "type": "anime",
        "name": "Sci-Fi",
        "url": "https://myanimelist.net/anime/genre/24/Sci-Fi"
      },
      {
        "mal_id": 15,
        "type": "anime",
        "name": "Kids",
        "url": "https://myanimelist.net/anime/genre/15/Kids"
      },
      {
        "mal_id": 18,
        "type": "anime",
        "name": "Mecha",
        "url": "https://myanimelist.net/anime/genre/18/Mecha"
      }
    ],
    "source": "Other",
    "producers": [
      {
        "mal_id": 28,
        "type": "anime",
        "name": "OLM",
        "url": "https://myanimelist.net/anime/producer/28/OLM"
      }
    ],
    "score": null,
    "licensors": [],
    "r18": false,
    "kids": true,
    "continuing": false
  },
  {
    "mal_id": 39250,
    "url": "https://myanimelist.net/anime/39250/Sumikko_Gurashi",
    "title": "Sumikko Gurashi",
    "image_url": "https://cdn.myanimelist.net/images/anime/1508/99026.jpg?s=c970dfc2cbbe728fd9834a70a30fe31b",
    "synopsis": "Sumikko Gurashi debuted in 2012 as slightly negative characters who like to stay in the corner of a room. The characters include \"Shirokuma,\" a polar bear who is sensitive to cold; \"Penguin?\" (with a question mark in its name), a penguin who is unsure if it is actually a penguin; \"Tonkatsu,\" a piece of pork cutlet that was left uneaten; \"Neko,\" a shy cat; and \"Tokage,\" who hides his nature as one of the last dinosaurs.\r\n\r\nThe franchise has inspired toys, books, stationery material, video games--and now a feature film.\r\n\r\n(Source: ANN)",
    "type": "Movie",
    "airing_start": "2019-11-07T15:00:00+00:00",
    "episodes": 1,
    "members": 253,
    "genres": [
      {
        "mal_id": 4,
        "type": "anime",
        "name": "Comedy",
        "url": "https://myanimelist.net/anime/genre/4/Comedy"
      }
    ],
    "source": "Other",
    "producers": [
      {
        "mal_id": 866,
        "type": "anime",
        "name": "Fanworks",
        "url": "https://myanimelist.net/anime/producer/866/Fanworks"
      }
    ],
    "score": null,
    "licensors": [],
    "r18": false,
    "kids": false,
    "continuing": false
  },
  {
    "mal_id": 39529,
    "url": "https://myanimelist.net/anime/39529/Youkai_Watch_Movie_6__Youkai_Gakuen_Y_-_Neko_wa_Hero_ni_Nareru_ka",
    "title": "Youkai Watch Movie 6: Youkai Gakuen Y - Neko wa Hero ni Nareru ka",
    "image_url": "https://cdn.myanimelist.net/images/anime/1871/99788.jpg?s=7920dd37ec1b620c3bb9f5bc85e30a74",
    "synopsis": "Sixth Youkai Watch film. ",
    "type": "Movie",
    "airing_start": "2019-12-12T15:00:00+00:00",
    "episodes": 1,
    "members": 232,
    "genres": [
      {
        "mal_id": 4,
        "type": "anime",
        "name": "Comedy",
        "url": "https://myanimelist.net/anime/genre/4/Comedy"
      },
      {
        "mal_id": 6,
        "type": "anime",
        "name": "Demons",
        "url": "https://myanimelist.net/anime/genre/6/Demons"
      },
      {
        "mal_id": 15,
        "type": "anime",
        "name": "Kids",
        "url": "https://myanimelist.net/anime/genre/15/Kids"
      },
      {
        "mal_id": 37,
        "type": "anime",
        "name": "Supernatural",
        "url": "https://myanimelist.net/anime/genre/37/Supernatural"
      },
      {
        "mal_id": 23,
        "type": "anime",
        "name": "School",
        "url": "https://myanimelist.net/anime/genre/23/School"
      }
    ],
    "source": "Game",
    "producers": [
      {
        "mal_id": 28,
        "type": "anime",
        "name": "OLM",
        "url": "https://myanimelist.net/anime/producer/28/OLM"
      }
    ],
    "score": null,
    "licensors": [],
    "r18": false,
    "kids": true,
    "continuing": false
  },
  {
    "mal_id": 39705,
    "url": "https://myanimelist.net/anime/39705/One_Punch_Man_2nd_Season_Specials",
    "title": "One Punch Man 2nd Season Specials",
    "image_url": "https://cdn.myanimelist.net/images/anime/1618/103829.jpg?s=f6865b81fc1e922b23537c3a1fde4328",
    "synopsis": "Short anime specials include in the One Punch Man 2nd Season BD & DVD.",
    "type": "Special",
    "airing_start": "2019-10-24T15:00:00+00:00",
    "episodes": 6,
    "members": 27780,
    "genres": [
      {
        "mal_id": 1,
        "type": "anime",
        "name": "Action",
        "url": "https://myanimelist.net/anime/genre/1/Action"
      },
      {
        "mal_id": 24,
        "type": "anime",
        "name": "Sci-Fi",
        "url": "https://myanimelist.net/anime/genre/24/Sci-Fi"
      },
      {
        "mal_id": 4,
        "type": "anime",
        "name": "Comedy",
        "url": "https://myanimelist.net/anime/genre/4/Comedy"
      },
      {
        "mal_id": 20,
        "type": "anime",
        "name": "Parody",
        "url": "https://myanimelist.net/anime/genre/20/Parody"
      },
      {
        "mal_id": 31,
        "type": "anime",
        "name": "Super Power",
        "url": "https://myanimelist.net/anime/genre/31/Super_Power"
      },
      {
        "mal_id": 37,
        "type": "anime",
        "name": "Supernatural",
        "url": "https://myanimelist.net/anime/genre/37/Supernatural"
      },
      {
        "mal_id": 42,
        "type": "anime",
        "name": "Seinen",
        "url": "https://myanimelist.net/anime/genre/42/Seinen"
      }
    ],
    "source": "Web manga",
    "producers": [],
    "score": 7.61,
    "licensors": [],
    "r18": false,
    "kids": false,
    "continuing": false
  },
  {
    "mal_id": 40489,
    "url": "https://myanimelist.net/anime/40489/Sword_Art_Online__Alicization_-_War_of_Underworld_Reflection",
    "title": "Sword Art Online: Alicization - War of Underworld Reflection",
    "image_url": "https://cdn.myanimelist.net/images/anime/1072/103398.jpg?s=68147aa59ac6544a572b6eca864be06e",
    "synopsis": "Recap of Sword Art Online: Alicization, aired one week before Sword Art Online: Alicization - War of Underworld.",
    "type": "Special",
    "airing_start": "2019-10-05T15:00:00+00:00",
    "episodes": 1,
    "members": 19635,
    "genres": [
      {
        "mal_id": 1,
        "type": "anime",
        "name": "Action",
        "url": "https://myanimelist.net/anime/genre/1/Action"
      },
      {
        "mal_id": 11,
        "type": "anime",
        "name": "Game",
        "url": "https://myanimelist.net/anime/genre/11/Game"
      },
      {
        "mal_id": 2,
        "type": "anime",
        "name": "Adventure",
        "url": "https://myanimelist.net/anime/genre/2/Adventure"
      },
      {
        "mal_id": 22,
        "type": "anime",
        "name": "Romance",
        "url": "https://myanimelist.net/anime/genre/22/Romance"
      },
      {
        "mal_id": 10,
        "type": "anime",
        "name": "Fantasy",
        "url": "https://myanimelist.net/anime/genre/10/Fantasy"
      }
    ],
    "source": "Light novel",
    "producers": [
      {
        "mal_id": 56,
        "type": "anime",
        "name": "A-1 Pictures",
        "url": "https://myanimelist.net/anime/producer/56/A-1_Pictures"
      }
    ],
    "score": 6.63,
    "licensors": [],
    "r18": false,
    "kids": false,
    "continuing": false
  },
  {
    "mal_id": 40083,
    "url": "https://myanimelist.net/anime/40083/Arifureta_Shokugyou_de_Sekai_Saikyou_Specials",
    "title": "Arifureta Shokugyou de Sekai Saikyou Specials",
    "image_url": "https://cdn.myanimelist.net/images/anime/1634/102577.jpg?s=5358201b5d8139b674640a6673a8c31b",
    "synopsis": "Unaired episodes included with the Blu-ray releases of Arifureta Shokugyou de Sekai Saikyou.  ",
    "type": "Special",
    "airing_start": "2019-12-24T15:00:00+00:00",
    "episodes": 2,
    "members": 11941,
    "genres": [
      {
        "mal_id": 1,
        "type": "anime",
        "name": "Action",
        "url": "https://myanimelist.net/anime/genre/1/Action"
      },
      {
        "mal_id": 2,
        "type": "anime",
        "name": "Adventure",
        "url": "https://myanimelist.net/anime/genre/2/Adventure"
      },
      {
        "mal_id": 10,
        "type": "anime",
        "name": "Fantasy",
        "url": "https://myanimelist.net/anime/genre/10/Fantasy"
      },
      {
        "mal_id": 35,
        "type": "anime",
        "name": "Harem",
        "url": "https://myanimelist.net/anime/genre/35/Harem"
      }
    ],
    "source": "Light novel",
    "producers": [],
    "score": null,
    "licensors": [],
    "r18": false,
    "kids": false,
    "continuing": false
  },
  {
    "mal_id": 39689,
    "url": "https://myanimelist.net/anime/39689/Nande_Koko_ni_Sensei_ga_Special",
    "title": "Nande Koko ni Sensei ga!? Special",
    "image_url": "https://cdn.myanimelist.net/images/anime/1702/102607.jpg?s=4abb0ddf0f3e0900a721e81feceb628a",
    "synopsis": "Unaired episode included with the Blu-ray box set.",
    "type": "Special",
    "airing_start": "2019-12-10T15:00:00+00:00",
    "episodes": 1,
    "members": 8091,
    "genres": [
      {
        "mal_id": 4,
        "type": "anime",
        "name": "Comedy",
        "url": "https://myanimelist.net/anime/genre/4/Comedy"
      },
      {
        "mal_id": 9,
        "type": "anime",
        "name": "Ecchi",
        "url": "https://myanimelist.net/anime/genre/9/Ecchi"
      },
      {
        "mal_id": 23,
        "type": "anime",
        "name": "School",
        "url": "https://myanimelist.net/anime/genre/23/School"
      },
      {
        "mal_id": 42,
        "type": "anime",
        "name": "Seinen",
        "url": "https://myanimelist.net/anime/genre/42/Seinen"
      }
    ],
    "source": "Manga",
    "producers": [
      {
        "mal_id": 1890,
        "type": "anime",
        "name": "tear-studio",
        "url": "https://myanimelist.net/anime/producer/1890/tear-studio"
      }
    ],
    "score": null,
    "licensors": [],
    "r18": false,
    "kids": false,
    "continuing": false
  },
  {
    "mal_id": 40315,
    "url": "https://myanimelist.net/anime/40315/Code_Geass__Fukkatsu_no_Lelouch_-_Shinkai_no_Kakera",
    "title": "Code Geass: Fukkatsu no Lelouch - Shinkai no Kakera",
    "image_url": "https://cdn.myanimelist.net/images/anime/1039/102819.jpg?s=4aad54e973f7c47c635447c06f889c18",
    "synopsis": "Picture drama included in the Code Geass: Fukkatsu no Lelouch Blu-ray/DVD release.",
    "type": "Special",
    "airing_start": "2019-12-04T15:00:00+00:00",
    "episodes": 1,
    "members": 5743,
    "genres": [
      {
        "mal_id": 4,
        "type": "anime",
        "name": "Comedy",
        "url": "https://myanimelist.net/anime/genre/4/Comedy"
      }
    ],
    "source": "Original",
    "producers": [
      {
        "mal_id": 14,
        "type": "anime",
        "name": "Sunrise",
        "url": "https://myanimelist.net/anime/producer/14/Sunrise"
      }
    ],
    "score": null,
    "licensors": [],
    "r18": false,
    "kids": false,
    "continuing": false
  },
  {
    "mal_id": 40477,
    "url": "https://myanimelist.net/anime/40477/Curry_Meshi_x_Zombieland_Saga",
    "title": "Curry Meshi x Zombieland Saga",
    "image_url": "https://cdn.myanimelist.net/images/anime/1265/103356.jpg?s=41cebf1b4f30673ea879292dce322222",
    "synopsis": "A special collaboration between Nissin Foods' Curry Meshi instant curry rice brand and the TV anime Zombieland Saga. A special themed box set with a music CD, artwork, and six curries will be sold for a limited time.",
    "type": "Special",
    "airing_start": "2019-10-02T15:00:00+00:00",
    "episodes": 1,
    "members": 3907,
    "genres": [
      {
        "mal_id": 19,
        "type": "anime",
        "name": "Music",
        "url": "https://myanimelist.net/anime/genre/19/Music"
      },
      {
        "mal_id": 37,
        "type": "anime",
        "name": "Supernatural",
        "url": "https://myanimelist.net/anime/genre/37/Supernatural"
      }
    ],
    "source": "Original",
    "producers": [],
    "score": 5.93,
    "licensors": [],
    "r18": false,
    "kids": false,
    "continuing": false
  },
  {
    "mal_id": 39846,
    "url": "https://myanimelist.net/anime/39846/Kono_Yo_no_Hate_de_Koi_wo_Utau_Shoujo_YU-NO_Special",
    "title": "Kono Yo no Hate de Koi wo Utau Shoujo YU-NO Special",
    "image_url": "https://cdn.myanimelist.net/images/anime/1038/102471.jpg?s=aa66fde66e873837b094fd3c796bce50",
    "synopsis": "Unaired episode included with the third Blu-ray volume. ",
    "type": "Special",
    "airing_start": "2019-12-25T15:00:00+00:00",
    "episodes": 1,
    "members": 2908,
    "genres": [
      {
        "mal_id": 24,
        "type": "anime",
        "name": "Sci-Fi",
        "url": "https://myanimelist.net/anime/genre/24/Sci-Fi"
      },
      {
        "mal_id": 8,
        "type": "anime",
        "name": "Drama",
        "url": "https://myanimelist.net/anime/genre/8/Drama"
      }
    ],
    "source": "Visual novel",
    "producers": [
      {
        "mal_id": 91,
        "type": "anime",
        "name": "feel.",
        "url": "https://myanimelist.net/anime/producer/91/feel"
      }
    ],
    "score": null,
    "licensors": [],
    "r18": false,
    "kids": false,
    "continuing": false
  },
  {
    "mal_id": 40280,
    "url": "https://myanimelist.net/anime/40280/Toaru_Kagaku_no_Accelerator__Tobidase_Ippou-san_Hachamecha_Kaishingeki",
    "title": "Toaru Kagaku no Accelerator: Tobidase Ippou-san Hachamecha Kaishingeki",
    "image_url": "https://cdn.myanimelist.net/images/anime/1052/102706.jpg?s=220a4523fd8e1005d1461ead40fc9fea",
    "synopsis": "Special included on the first Blu-ray/DVD volume of Toaru Kagaku no Accelerator.",
    "type": "Special",
    "airing_start": "2019-10-29T15:00:00+00:00",
    "episodes": 1,
    "members": 2658,
    "genres": [
      {
        "mal_id": 31,
        "type": "anime",
        "name": "Super Power",
        "url": "https://myanimelist.net/anime/genre/31/Super_Power"
      },
      {
        "mal_id": 37,
        "type": "anime",
        "name": "Supernatural",
        "url": "https://myanimelist.net/anime/genre/37/Supernatural"
      }
    ],
    "source": "Manga",
    "producers": [
      {
        "mal_id": 7,
        "type": "anime",
        "name": "J.C.Staff",
        "url": "https://myanimelist.net/anime/producer/7/JCStaff"
      }
    ],
    "score": null,
    "licensors": [],
    "r18": false,
    "kids": false,
    "continuing": false
  },
  {
    "mal_id": 38601,
    "url": "https://myanimelist.net/anime/38601/Hangyakusei_Million_Arthur_Special",
    "title": "Hangyakusei Million Arthur Special",
    "image_url": "https://cdn.myanimelist.net/images/anime/1632/95918.jpg?s=341daea57283b959f2d5b9ba4e51c31a",
    "synopsis": "Unaired episode bundled with the sixth Blu-ray volume of the Hangyakusei Million Arthur anime series.",
    "type": "Special",
    "airing_start": "2019-10-01T15:00:00+00:00",
    "episodes": 1,
    "members": 2002,
    "genres": [
      {
        "mal_id": 1,
        "type": "anime",
        "name": "Action",
        "url": "https://myanimelist.net/anime/genre/1/Action"
      },
      {
        "mal_id": 2,
        "type": "anime",
        "name": "Adventure",
        "url": "https://myanimelist.net/anime/genre/2/Adventure"
      },
      {
        "mal_id": 10,
        "type": "anime",
        "name": "Fantasy",
        "url": "https://myanimelist.net/anime/genre/10/Fantasy"
      },
      {
        "mal_id": 16,
        "type": "anime",
        "name": "Magic",
        "url": "https://myanimelist.net/anime/genre/16/Magic"
      }
    ],
    "source": "Game",
    "producers": [
      {
        "mal_id": 7,
        "type": "anime",
        "name": "J.C.Staff",
        "url": "https://myanimelist.net/anime/producer/7/JCStaff"
      }
    ],
    "score": 6.29,
    "licensors": [],
    "r18": false,
    "kids": false,
    "continuing": false
  },
  {
    "mal_id": 40578,
    "url": "https://myanimelist.net/anime/40578/Lupin_III__Prison_of_the_Past",
    "title": "Lupin III: Prison of the Past",
    "image_url": "https://cdn.myanimelist.net/images/anime/1768/103599.jpg?s=dec3cf1a27d4b8b9d5c1f974feea7274",
    "synopsis": "New Special of Lupin III, to be aired as a part of Friday Roadshow on November 29, 2019.\r\n\r\nThe episode will focus on Lupin's gang descending upon the Kingdom of Doruente in order to rescue a famous thief who has been detained. While this takes place, the most notorious thieves from around the world gather in the kingdom.\r\n\r\n(Source: MAL News)",
    "type": "Special",
    "airing_start": "2019-11-28T15:00:00+00:00",
    "episodes": 1,
    "members": 993,
    "genres": [
      {
        "mal_id": 1,
        "type": "anime",
        "name": "Action",
        "url": "https://myanimelist.net/anime/genre/1/Action"
      },
      {
        "mal_id": 2,
        "type": "anime",
        "name": "Adventure",
        "url": "https://myanimelist.net/anime/genre/2/Adventure"
      },
      {
        "mal_id": 7,
        "type": "anime",
        "name": "Mystery",
        "url": "https://myanimelist.net/anime/genre/7/Mystery"
      },
      {
        "mal_id": 4,
        "type": "anime",
        "name": "Comedy",
        "url": "https://myanimelist.net/anime/genre/4/Comedy"
      },
      {
        "mal_id": 42,
        "type": "anime",
        "name": "Seinen",
        "url": "https://myanimelist.net/anime/genre/42/Seinen"
      }
    ],
    "source": "Manga",
    "producers": [
      {
        "mal_id": 73,
        "type": "anime",
        "name": "TMS Entertainment",
        "url": "https://myanimelist.net/anime/producer/73/TMS_Entertainment"
      }
    ],
    "score": null,
    "licensors": [],
    "r18": false,
    "kids": false,
    "continuing": false
  },
  {
    "mal_id": 40651,
    "url": "https://myanimelist.net/anime/40651/Kandagawa_Jet_Girls_Recap",
    "title": "Kandagawa Jet Girls Recap",
    "image_url": "https://cdn.myanimelist.net/images/anime/1851/103980.jpg?s=5611f9559ed50b15f039412c999ff2c5",
    "synopsis": "Recap of the first four episodes of Kandagawa Jet Girls.",
    "type": "Special",
    "airing_start": "2019-11-04T15:00:00+00:00",
    "episodes": 1,
    "members": 670,
    "genres": [
      {
        "mal_id": 30,
        "type": "anime",
        "name": "Sports",
        "url": "https://myanimelist.net/anime/genre/30/Sports"
      },
      {
        "mal_id": 9,
        "type": "anime",
        "name": "Ecchi",
        "url": "https://myanimelist.net/anime/genre/9/Ecchi"
      }
    ],
    "source": "Original",
    "producers": [
      {
        "mal_id": 120,
        "type": "anime",
        "name": "TNK",
        "url": "https://myanimelist.net/anime/producer/120/TNK"
      }
    ],
    "score": 5.27,
    "licensors": [],
    "r18": false,
    "kids": false,
    "continuing": false
  },
  {
    "mal_id": 40482,
    "url": "https://myanimelist.net/anime/40482/Osu_no_Buu-chan",
    "title": "Osu no Buu-chan",
    "image_url": "https://cdn.myanimelist.net/images/anime/1985/103362.jpg?s=6e63dc0ddcce6b01d88390869055a51c",
    "synopsis": "A new anime short for Nagoya area tonkatsu shop Yabaton. The short on an outdoor screen near the main Yabaton shop and the main voice actor Fukushi Ochiai, who voices Buu-chan, will attend the premiere. \r\n\r\nThe short follows the shy and kind-hearted Buu-chan and his unusual family as they get into both slapstick and heartwarming situations. \r\n\r\nYabaton serves Nagoya's regionally famous street food, misokatsu, a pork cutlet in miso sauce, as well as other fried foods. The chain has many locations but its main shop is located is Yaba-cho in Nagoya city (specifically the Osu Shopping District) where it can be easily spotted thanks to its towering mascot. \r\n\r\n(Source: ANN)",
    "type": "Special",
    "airing_start": "2019-10-05T15:00:00+00:00",
    "episodes": 1,
    "members": 26,
    "genres": [
      {
        "mal_id": 4,
        "type": "anime",
        "name": "Comedy",
        "url": "https://myanimelist.net/anime/genre/4/Comedy"
      },
      {
        "mal_id": 15,
        "type": "anime",
        "name": "Kids",
        "url": "https://myanimelist.net/anime/genre/15/Kids"
      },
      {
        "mal_id": 10,
        "type": "anime",
        "name": "Fantasy",
        "url": "https://myanimelist.net/anime/genre/10/Fantasy"
      }
    ],
    "source": "Original",
    "producers": [],
    "score": null,
    "licensors": [],
    "r18": false,
    "kids": true,
    "continuing": false
  }
];


const viewing = [
  {
    "idMal": 28735,
    "id": 20972,
    "title": {
      "userPreferred": "Shouwa Genroku Rakugo Shinjuu"
    },
    "coverImage": {
      "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx20972-95dyLz6lkCZ8.jpg"
    }
  },
  {
    "idMal": 31173,
    "id": 21258,
    "title": {
      "userPreferred": "Akagami no Shirayuki-hime 2"
    },
    "coverImage": {
      "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/21258-rOjXDsj9O0ON.jpg"
    }
  },
  {
    "idMal": 37379,
    "id": 101215,
    "title": {
      "userPreferred": "Chihayafuru 3"
    },
    "coverImage": {
      "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx101215-O9BzSTAOsS5y.jpg"
    }
  },
  {
    "idMal": 37972,
    "id": 104052,
    "title": {
      "userPreferred": "Hoshiai no Sora"
    },
    "coverImage": {
      "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/b104052-GKTQkFtNPEca.jpg"
    }
  },
  {
    "idMal": 38408,
    "id": 104276,
    "title": {
      "userPreferred": "Boku no Hero Academia 4"
    },
    "coverImage": {
      "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx104276-DplpGzgCoRZX.jpg"
    }
  },
  {
    "idMal": 38671,
    "id": 105310,
    "title": {
      "userPreferred": "Enen no Shouboutai"
    },
    "coverImage": {
      "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx105310-Qvqp6Ls3mqul.jpg"
    }
  },
  {
    "idMal": 38691,
    "id": 105333,
    "title": {
      "userPreferred": "Dr. STONE"
    },
    "coverImage": {
      "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx105333-5p1MKBlGxZFF.jpg"
    }
  },
  {
    "idMal": 38680,
    "id": 105334,
    "title": {
      "userPreferred": "Fruits Basket (2019)"
    },
    "coverImage": {
      "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx105334-SCZAVd9fLWWN.jpg"
    }
  },
  {
    "idMal": 39195,
    "id": 107660,
    "title": {
      "userPreferred": "BEASTARS"
    },
    "coverImage": {
      "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx107660-Kb8zVGnLYHrV.jpg"
    }
  },
  {
    "idMal": 39468,
    "id": 108268,
    "title": {
      "userPreferred": "Honzuki no Gekokujou: Shisho ni Naru Tame ni wa Shudan wo Erandeiraremasen"
    },
    "coverImage": {
      "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx108268-eRkvln6eoChs.jpg"
    }
  },
  {
    "idMal": 39570,
    "id": 108581,
    "title": {
      "userPreferred": "High Score Girl II"
    },
    "coverImage": {
      "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx108581-DNnz0Ou8qcIf.jpg"
    }
  },
  {
    "idMal": 39940,
    "id": 109963,
    "title": {
      "userPreferred": "Shokugeki no Souma: Shin no Sara"
    },
    "coverImage": {
      "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx109963-t8E9axH0Dvrn.jpg"
    }
  }
]


// We'll need to render stuff fr
// So let's get the data in a good format
let mapped = {};
let weeklyShows = [];

viewing.forEach(show => {
  mapped[show.idMal] = {
    image: show.coverImage.large,
    title: show.title.userPreferred
  }
})

// Map additional data in if applicable
seasonal.forEach(show => {
  let id = show.mal_id;

  if (mapped[id]) {
    // We found a homie!
    // Add in the airing date
    mapped[id].startDate = new Date(show.airing_start);
    mapped[id].url = show.url;
    mapped[id].id = id;
    weeklyShows.push(mapped[id]);
  }
})

const DAYS = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
]

function WeeklyReleaseSchedule(props) {
  console.log(weeklyShows);

  weeklyShows.sort((a, b) => ((a.startDate.getDay() < b.startDate.getDay()) ? -1 : 1));

  // Now it's up to us to write out a cool table or something?
  const showDistribution = []

  for (let i = 0, showIndex = 0; i < DAYS.length; i++) {
    const currentDay = [];

    // Add shows while the day is equal
    while (showIndex < weeklyShows.length && weeklyShows[showIndex].startDate.getDay() === i) {
      currentDay.push(weeklyShows[showIndex]);
      showIndex++;
    }

    showDistribution.push(currentDay);
  }

  console.log(showDistribution);

  const currentDay = new Date().getDay();

  return (
    // Filter that ish
    <div>
      <h1 className="week-banner">Weekly Release Schedule</h1>
      <div className="week-wrapper">
        {showDistribution.map((distribution, index) => (
          <WeekdayTile key={DAYS[index]} shows={distribution} day={DAYS[index]} current={index === currentDay} />
        ))}
      </div>
    </div>
  )
}

export default WeeklyReleaseSchedule

