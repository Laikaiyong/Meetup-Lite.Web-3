import { EventModel } from "@/model/Event";
import { calendarOutline, calendarSharp, walletOutline, walletSharp } from "ionicons/icons";
import { GroupProvider } from "./GroupProvider";

export class EventProvider {
  static eventList: EventModel[] = [
    {
      id: 1,
      title: "Solana Superteam Meetup",
      organizer: GroupProvider.groupList.filter(group => group.id == 1)[0],
      imageUrl:
        "https://media.licdn.com/dms/image/C4E0BAQFQLb3NigCYsQ/company-logo_200_200/0/1651774940262?e=1704326400&v=beta&t=AklfJtqH5R1iqSsD7ck23j89UIofYxoO4lqEPRqdew8",
      dateTime: {
        text: "2023-10-20 18:00",
        iosIcon: calendarOutline,
        mdIcon: calendarSharp,
      },
      allocatedFunds: {
        text: "88 SOL",
        iosIcon: walletOutline,
        mdIcon: walletSharp,
      },
      participants: [
        {
            id: "user1",
            name: "Alice",
            subtitle: "Web3 Enthusiast",
            bio: "Interested in NFTs.",
            interests: "Web3, NFT, Crypto, Art",
            joinedGroups: [1, 2],
            eventHistory: [1, 2],
          },
          {
            id: "user2",
            name: "Bob",
            subtitle: "Crypto Trader",
            bio: "Day trader in the crypto market.",
            interests: "Trading, Crypto, Finance",
            joinedGroups: [1, 3],
            eventHistory: [1],
          },
          {
            id: "user3",
            name: "Charlie",
            subtitle: "Blockchain Developer",
            bio: "Building decentralized apps.",
            interests: "Web3, Solidity, Smart Contracts",
            joinedGroups: [2, 3],
            eventHistory: [2],
          },
          {
            id: "user4",
            name: "Diana",
            subtitle: "Data Scientist",
            bio: "Love crunching numbers.",
            interests: "Data Science, Python, Jupyter",
            joinedGroups: [4],
            eventHistory: [2],
          }
      ]
    },
    {
      id: 2,
      title: "Ethereum Global Hackathon",
      organizer: GroupProvider.groupList.filter(group => group.id == 1)[0],
      imageUrl:
        "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUWFRgWFRUZGRgaGh4aGBwcGhoaGhocGhwZGhoYHBkcIS4lIR4rHxgcJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHBISHjYrJCExMT80NTQ0NDQ4NDo0NDQ0NDQ0MTE0NDE6MTQ0NDQ0NzUxNDQxNDQ0NjE0NDQ0NDQ0Mf/AABEIALEBHAMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAAAQIFBgcDBAj/xABIEAACAQIDBAcEBQcLBAMAAAABAgADEQQSIQUxQVEGBxMiYZHwMnGBoRRiscHRNUJSsrPh8RckM1Nyc3SCk6LCFSOSxCVEdf/EABkBAQEBAQEBAAAAAAAAAAAAAAABAgQDBf/EACoRAQACAgEDAwMDBQAAAAAAAAABAgMRIQQSMRNBUSJhcZHR8DKhscHh/9oADAMBAAIRAxEAPwDkURE62CIiAiIgIiTfT7/Kw+3z8IEREQElra2vbx3yIgIiICIiBObS3rw++REQESV/h4et3xi3vv8AK2t4EReIgSB428/uhTbkYvA9fjAevH1+EiWVdbEgeJvb/aCZCn1/CBAiIgSDIiICIiAiIgIiICIiAiIgItEkwIiIIgCPXv1iSRu8flrC243+HPhAgiDEQEkeUi8QElh4euPz4QT65+MiBJkleWumuh04a6SskHWAA8/u/GDIkkwF5FokmBEm/wB/hEiAiBB/hAREQAiIAgIiICLQYtAREQESSPH1ykQERECT6/fIiICIkjhfd87fjAgxJtECIiDASQYJgn18oCDy3+fnJzcOG+3uuB9p85BWAvy/fJEgCXU8/Dy0A+6At4X+61t/hvnnPTx+H3afAiUMBaRJvBEBBMSIEwD4+t1vIyJIPr7YCCJEQJvwgSIAgIiBAREQEREBERAERPt2VsupiHCUlud5J0VR+kx4CbpR6A0lUdrXa/1Qqj4ZrkzM2iPLzvkrXiZc+ib7iur8WvRr35BlBB/zL+E1vE9GcWjin2DszGylRmVvHMN3xtJ3187KZK3nUTyw9uP3i/lv+MgCdA2V1Y13AbEVVp/UUZ39xNwoPuvMr/JnhT3Riamb3of9trzlt1+Cs63v8RMuqMGSY3pyu8ibN0p6HVsHZyRUpE2zqCMpO4Outr8De01mdOPJXJHdWdw8rVms6klr6cPvPq3zlYm0JMkSVW9gJRFpEuAPXOVtAjN8v4/aT5xAk2kA2tvN+Om7U6DXXhygiFMgi0CXHAG8i0H1x+YiAvF/X74MiBIkSfX4yJQiIkCDEShERAkGQIi0BEReAiIgdE6OMMLs5sRlBZrtrxObIi+6+v8AmM0LFYp6jl6jlmO8sb+XIeAm9Uh2uxiBvRST/kqZj/tE1vovsJsVUsbimurt9ir9Y/IfCecTEbmXPjmK99rfMvq6HbMxNRs9Ko9KmD3mBNj4BdzH36D5TccftrD08QlOpiGVr2ZgL5NNCxWwW/gNL3Okw3SnpKtBfouFsuUZWZfzBxRfrczw9+7OdCerpcRs+rVxAtVxK3oMwuaajVKnPvHU81tzM8stIvX6vdcdZvaL2jj2j91enux8VVp9th8Q9Sllu1JWFith3lyWDg7yDc66cpyYcx58puXRfpJW2fWbD1w3Zq5R03mmwNmZfC+ttx3jWZTp/wBF0KfTsLZkYB6irqtm17VbcNe9585y4LTgtGLJ4nxMf4l9C8epHfXzHmGS6A7TbG4athcSS+VQuZtWKOCBc7yyldDv1HKcrrUijMje0rFT71JB+ydG6n8Ob4mofZsiA+PeY+Qt5zn2Nqh6juNzO7D3Mxb7DN9NEV6jJWvjj9ZTJO8dZnzy+dfWl5YzP9Bdl08TjqFCsCUcuGAJU2Wm7izDXeo8p2b+SjZn9XU/1X/GdtrRWXhEPzyJKtx9cp2rpl1d4HD4KtWpI4dApUmo5Grqp0J5EzOfyU7M/q6n+q/4yepBp+eRxkWn6G/kp2Z/V1P9V/xmrp0DwX/V2wmRuxGE7YDO98/aBL5r3tbhEZIk05Gq+/4SXW27zG425HiJuPWVsGhgsWlHDqyqaKubsWOZnqLvbwQT5urvYtHGY1aNcMyFHYgMVN1tbUa8TNd3GzTVWHq0ZiN3K3wm8daXRrD4GtRTDqyq6MzZmZtQ1hbNu0nxdDOhrY3NVdxQw1L+kqtbgLsq5tLgaknQXG/dHdGtmmpXi86TUxvRuici4bEYi2hqBnF+FxeonyUSuO6F4PF0Wr7IqlmQXqYdyc4HJc3eB0Nr3B1seEneac4Ei8l/3HhY66TcusDo/QwqYNqCsDWoZ3uxa7WTUXOntHQSzPJppsD185EmaREQdxm59aGyaGGxVJMPTCI2HRyASQWL1ATqTvCjyk3zoaaJERKJ9ej8N0iBEBA9euE+7YmGWpiaFNxdHrU0YA2JDMqsL8NCZlen+yaWFx1ahRBVFCZQWLHvIjHU6nUmTfOhrkREoREQN36AbRUJWoVD3bFwDxFsrr5ZdPEz7do7Up4PBJTw+juDYn2l4O5+tfQfgJrvRXAhi9RtyjKp5Ei7H4C3mZ9O1cCK1Ba1LvMo1tvZeItzBvp757R0k2p3R+dfZz2pWbbn5j8K9X/Rk47FqrAmknfrnX2b6Lf9Jjp7sx4T9LIoAAAAAFgBoABuAE/M3QPE1FxISjiTh6rgLTY60ne/dp1V4q24HWxI01066On1Wh/2cbg6q4rdTWiudMQd16bcOZBvYeOk4rxMy6oa511dFt2PpLyTEAeSVD8lP+XxmvdW/STI30SsQadQkU77kdt6G/5rX8/eZ93WRj8Y1IfTaootUsaWDptcBARd69Qe0eS7ri4tYia30M2Ia1QVXX/tobj6zDUD3DefgJjJjjJimtv58Pbp62tliK+7dcfiaGBwGIWhoXd1QEi+apcKV8FQaf2JyMradH25h6eJwtRqRzGmzFSOae0Bzut7c7ic8C8vXjM9HimlZmeZmeXt19IreIr41w2rqv8AyrhtPzqn7GpznRut3o1isYcN9Go9p2Yq5++i5c/Z5fbYXvlO7lOc9V35Uwv9p/2NSdc6wumr7ONAJRWp2ocnMxXL2eTdYG98/wAp7X33RpxR4cQ270SxeERXxNDs0ZsqnPTe7WLWsrk7gd/KfZ1cKBtPC6fnn9R593TTp6+0KSU2oJTCPnBVy1zlZbG4Fh3ifhPi6uh/8nhf7w/qPNc9s7Vv3XwB2eEv+nU/VWYDqSW20HFv/rP+0ozYevYdzC/26n6qTA9Sg/n7/wCGf9pRkj+hPdmutHojjcXjFq4eh2iCgqFs9JbMHqEizsDuYa+M8erfobjsLjlrYjD5ECOpbtKTasBYWRyeHKZ/p31gvgMQtBaCODSWpmZ2U6s65bBT+h8549CusepjsUuHbDogKM2ZXZj3QNLFRzmd27fsvG2tde5/nGH/ALl/1p4dZdU4TDYPZtPuqtIVa1tMzE2Ba3DOHa3PLynv18D+cYf+5f8AWnh1s0O3TB7Qp606lEU2I3K2rqD495x71ljxA5zSpPUOVEZmtuRSx0tc5V+Z8ZltitjcJWFehTqq6ggHsmIKsLEMtrEcbHiAeE+bYO262ErCvQYB8pW7KGFmtfQ8dBN22B1g7WxOJpUEemS7AG1Je6u9mPgq3Pwm7bSHPtoCr2jNWVhUcs7ZlKlixJLZbDeb7hab91t/0ezf8L91OfB1xY9au0XCm/ZU1pE/WGZ2HwNS3wn39bf9Hs3/AAv/ABpzO96VhOiXQqpjVas9RcPhk9us9rXFswAJANuJJAHM7pnG6uMPXVhgNpUq9VQSaZygtbkVY299iN2ojrGqmlgdmYambUWodowG52yocx52Ls3va/KaBgMa9GolamxV0YMrDmOGnA7iOIJljc87Th54vDtTZkqKVZCVZTvVhoQRO1dOOhn0rEJia+ITDYanh6aM7EZiwdyVAJAGjLqeJFgZpvXRQVcerKuVqmHR3H1rulz45UUfCZLrsxtQ1cNQ17NaAqAa2Z2ZkJPAlVUW5ZzzkmZnSvGt1e4XEIx2bj1r1EFzScqCw8GFiOQuLX4ic6q0mRmVgVZSVYHQqVNiCOBBBn39HsZUo4mjUpEh1qLlt+ddgpX3MCRbxm+dLNm0m6Q0kIGSo9F3XgW4gj62UX/tGXc1nUp5Y7ZXV2BQWvtDFJg0fVFa2dgRcXDEAG2uXU87T7qfVUKzo2ExtOth2Yq7qAzUyFJF1DWbUAEXBGYaWmB60cfUq7SrhybU2FNFO5VCg6DxJLfGfZ1P46om0kppfJVV1qDhZEZ1YjmCLX+secn1a3teGD2bg+x2nSo5s3Z4xKea1s2SuFzW1te17XmU62vyriPdT/ZJPlb8tH/9H/2Z9XW1+VcR7qf7JJY8x+E9mnHxPD8BbT1pIiTlPIz0REWiIG14c9ns9mG9g3+5sn2WmL2BtY0Xyt7DHvfVO7MPv/dMvs1e3wTU19pbgDxDZ189BNTdSCQRYjQg6EeBE7MtrU9O1faI/wCsRG9xLZNv7FtetRF1PeZV4ccy24cdJ1Pob1h0nwL1MUw7bDKO051Ae6jrzZj3T48gRORbA2w9MhCGZDwGrL4qBvHhMrjNmYdqysyuovd1UWvfkDqNd9vtmM+KmWnqU4n3j9mqb7or/d5dnX2pinr1LqpbvNvVVHs00vxC6fM6nXI9J9sJQpjCYeykDK5H5i8Vv+kb6nfrzM9ekW3Po6LRw9NkBUWYoVVQeCg725nh4ndobcbnXjfU31ubzhiJnmfD6OS1enr6dOZnzP8AqG6dXVa4rUz7Pda3vurfICadXpZHZb+yxX/xJH3TeOg+FNKlUr1O6rAEX/RQElvcb6e7xmkVHLsznQsxb3ZiTNV8yzn3GDHFvPP6Nj6uK6JtLDO7KiKXuzMFUXo1ALsTYakCdt2xU2Visn0irhamS+TNWTu5rZrWbjlHlPzeRpoPf4+Mo6C26LU3O3Ft2TprszY64Gu2GGF7UKCmSorPfMt7AMbm0530Bqqm0cM7sqKHJZmYKoGRxqToNZr+UA7hylkURFdRo26x1zbSoVkwwo1qdQh3vkdWtdVGuUm19Zg+qHF06WNdqtREX6OwDOyoty9IgXYjXQ6eBmkhBJKj18Yiv06Nt163sZTq41GpVEdfo6LdGDi4eqbXUkX1GniOc+PqqxSUtoq9R0ROzcZmYItyBYXYgXmokzza3wl7eNG3ReujH0quIw7UqiVAKTAlGVwDnvYlSbGY3oV0wp0KTYLG0+1wdQ6i2Y0yTckDit7NpqDqNZpUED19snbGtG3S6nQnZFU56G1qdNDrld6ZYA8O8ysN9u8Lz0fb2zdlU3TZ5+kYpgVNdrMqA2OjWCkbiFXQ2GY6Tl0W9fbHb8ybK1RnLOxLMxLMxNyWJuSTxJN/Ob71oY2lUp7PFOojlcPlfK6sVNqejWOh0Oh5TQSJWWY5hHRdhbZwWNwaYDaFQ0Xon+bV+AHBWO4WGljYEBdQQJ9WA6ObJwTjEYjaVPE9mQyUqWQlmGq5lV2J1tobDmbXnMItJ2/Ertl+le3HxuJqYhxlzEBF35FXRV8tSeZM6z0rx2ycfkw1XFIlRUD0q4ZWQFrq1Nmvlv3ASrEb1sZxCRaJpvX2Nuo7N2RsrZrDE1scmMdDmo0qWU98aqxCu2o3gkgDQ66TQ9rbdq18W+LJy1GcOttchS2QC/6IVRrymKAgSxXXJt1LH/8ATdrha74pMFiwoWsHt2b20DAsVB0FgQ1wLAjQT6dg4vZOx2BGJ+l13IVqlMApSpkjM3dLDhcgFmNhoJyQxM9ntvg233b+Bw9HamHr0cZSrJWxQrNlZD2INZHIZgxFu8dTbRZjus/EpU2lXem6upFOzKwZTamgNipsdRNTiaiujZERNIREQPt2ZtJqDZl1B0ZTuYfcfGbEdt4SprVp976yhvJheahE9sfUXpGo5j4nlmYiW3P0jw6C1Gkfgqqv4/KYqp0irl1cEKV9kBQR8c2p09CYeWEuTqL3jtmePiGqx2z3R5bxhOnCMuXEUb8ytmU+9G/Ez6BtzZo7worm36URe/la80ID163ywE5fTh2x12TXOp/MNj2/0nbEL2aLkp8QSMzW3BuAHhr75rtpaXHLh6vNRERGoc+XLbJO7TuUFfGVyz1C8Z4sZXkqfXn+MlRrAtLQPQfwkM0oGiBVpWWMqYEWlZdpUCBEqZa0FfC1/wCBPmIFZAhhEBF5EQJMfx4fbIgwEm0iIC0REBEReAiIgIiICIiBKmWvKiXA9fv+Eouskg8fjKrLqYEqJ6AQoEgmQTbx9aTzKyWaVgVtLK2t4LcpPr7YAmSZAEAX+6BErJkGBO+VIkysCJLOSACTYeyLmwubkAcNTeDvlYEERJEiAkAxBgRJ3HxH3RIgLREQEREBERAREQEREBEQDAkGXUygkiUexcnUngB8AAB8gJIY6a7t0osuIHtPNvGC882kFoJlkEkiBSSJOWCIFYMm3rwgQKmQZMgygJEQRIItKy1oMCpkWlogR6+UpLSJRBERAkCIiAiIgIiICIiAiIgDERAT0T3SgEkQPRGkzzvLZoEmSDK3l0MCyiWOnhKgS1zvvx9/xgCZBi0QEpLXkyilpEtIgQYMRAWlZYmQ3r0YFSYvBkQIlTLSASN2hgJEm2nx9afD5iRIBiIgIiB68YCSPGREBECICQYiBep7Te8/bKxECRuPrjAiIAS6xECDPVt/lIiBYbpaIlFk3/CeURAvKGIgBL8Ph/yiIHnA4xECokGIgDKtEQKwYiAiIkCIiAiIgIiICIiB/9k=",
      dateTime: {
        text: "2023-11-05 09:00",
        iosIcon: calendarOutline,
        mdIcon: calendarSharp,
      },
      allocatedFunds: {
        text: "10,000 SOL",
        iosIcon: walletOutline,
        mdIcon: walletSharp,
      },
      participants: [
        {
            id: "user1",
            name: "Alice",
            subtitle: "Web3 Enthusiast",
            bio: "Interested in NFTs.",
            interests: "Web3, NFT, Crypto, Art",
            joinedGroups: [1, 2],
            eventHistory: [1, 2],
          },
          {
            id: "user2",
            name: "Bob",
            subtitle: "Crypto Trader",
            bio: "Day trader in the crypto market.",
            interests: "Trading, Crypto, Finance",
            joinedGroups: [1, 3],
            eventHistory: [1],
          },
          {
            id: "user3",
            name: "Charlie",
            subtitle: "Blockchain Developer",
            bio: "Building decentralized apps.",
            interests: "Web3, Solidity, Smart Contracts",
            joinedGroups: [2, 3],
            eventHistory: [2],
          },
      ]
    },
    {
      id: 3,
      title: "NFT Art Expo",
      organizer: GroupProvider.groupList.filter(group => group.id == 1)[0],
      imageUrl:
        "https://media.freemalaysiatoday.com/wp-content/uploads/2022/06/lifestyle-nft-emel-pic-100622.jpg",
      dateTime: {
        text: "2023-12-01 12:00",
        iosIcon: calendarOutline,
        mdIcon: calendarSharp,
      },
      allocatedFunds: {
        text: "5000 SOL",
        iosIcon: walletOutline,
        mdIcon: walletSharp,
      },
      participants: [
        {
            id: "user1",
            name: "Alice",
            subtitle: "Web3 Enthusiast",
            bio: "Interested in NFTs.",
            interests: "Web3, NFT, Crypto, Art",
            joinedGroups: [1, 2],
            eventHistory: [1, 2],
          },
          {
            id: "user2",
            name: "Bob",
            subtitle: "Crypto Trader",
            bio: "Day trader in the crypto market.",
            interests: "Trading, Crypto, Finance",
            joinedGroups: [1, 3],
            eventHistory: [1],
          },
      ]
    },
    {
      id: 4,
      title: "Blockchain Security Summit",
      organizer: GroupProvider.groupList.filter(group => group.id == 1)[0],
      imageUrl:
        "data:image/jpeg;base64,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",
      dateTime: {
        text: "2024-01-15 10:00",
        iosIcon: calendarOutline,
        mdIcon: calendarSharp,
      },
      allocatedFunds: {
        text: "1,500 SOL",
        iosIcon: walletOutline,
        mdIcon: walletSharp,
      },
      participants: [
        {
            id: "user1",
            name: "Alice",
            subtitle: "Web3 Enthusiast",
            bio: "Interested in NFTs.",
            interests: "Web3, NFT, Crypto, Art",
            joinedGroups: [1, 2],
            eventHistory: [1, 2],
          },
      ]
    },
  ];
}