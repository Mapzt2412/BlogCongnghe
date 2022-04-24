export default function handler(req, res) {
  const postsList = [
    {
      topic: "TECHNOLOGY",
      posts: [
        {
          id: 1,
          author: {
            name: "dinhtrung",
            avatar:
              "data:image/jpeg;base64,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",
          },
          title: "Nga tuyen bo chan FaceBook de chan tin gia",
          date: "01/03/2020",
          thumbnail: "https://znews-photo.zingcdn.me/w960/Uploaded/qfssu/2022_03_15/TOP_61_CHUNG_KHAO_MWVN_2022_20__1.jpg"
        },
        {
          id: 2,
          author: {
            name: "toanvan",
            avatar:
            "data:image/jpeg;base64,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"
          },         
          title: "Apple bị kiện vì bán iPhone không kèm sạc",
          date: "23/4/2022",
          thumbnail: "https://znews-photo.zingcdn.me/w860/Uploaded/spluaaa/2022_04_22/anh_thumb.png"
        },
        {
          id: 3,
          author: {
            name: "canhnguyen",
            avatar:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtY1GPIdoxjrr3jWhsDB7S9YeRHq6OPrGhJg&usqp=CAU"
          },
          title: "MacBook sắp được nâng cấp đồng loạt",
          date: "15/4/2022",
          thumbnail: "https://znews-photo.zingcdn.me/w860/Uploaded/pqmcbzwv/2022_04_15/01f87f8e9e50bd5df4b9968f6bb355ddd2cbf8ba.jpeg"
        },
        {
          id: 4,
          author: {
            name: "aidoaido",
            avatar:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi7G9kJ5bJCS6MqZLpdqFsYarQvO_Bjy50yw&usqp=CAU"
          },
          title: "Apple đang chuẩn bị cho sự thay đổi lớn",
          date: "1/4/2022",
          thumbnail: "https://znews-photo.zingcdn.me/w1200/Uploaded/spluaaa/2022_03_31/38a4910fcb7bd74852dcab5a3047bbb777c4ce4f.jpg"
        },
        {
          id: 5,
          author: {
            name: "bomaycantat",
            avatar:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi7G9kJ5bJCS6MqZLpdqFsYarQvO_Bjy50yw&usqp=CAU"
          },
          title: "Thiết kế gây tranh cãi của BMW 7-Series mới",
          date: "23/4/2022",
          thumbnail: "https://znews-photo.zingcdn.me/w860/Uploaded/neg_estpyge/2022_04_21/BMW_i7_14.jpg"
        }
      ]
    },
    {
      topic: "PROGRAMMING",
      posts: [
        {
          id: 1,
          author: {
            name: "cauvang",
            avatar:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuWPkoD_BlrMnQbA3rx3OFD-xHD86fc3S3XA&usqp=CAU"
          },
          title: "Hyundai Palisade 2023 lộ diện với diện mạo hầm hố",
          date: "15/4/2022",
          thumbnail: "https://znews-photo.zingcdn.me/w860/Uploaded/uivpyciv/2022_04_14/2023_Hyundai_Palisade_Carscoops_1.jpg"
        },
        {
          id: 2,
          author: {
            name: "caucaotronggiapha",
            avatar:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTtw1U--5ExL_X-d_ePiCs0nrqdRwXauasyw&usqp=CAU"
          },
          title: "Vietnam Star tung ưu đãi tri ân khách hàng sở hữu xe Mercedes-Benz",
          date: "13/4/2022",
          thumbnail: "https://znews-photo.zingcdn.me/w1200/Uploaded/wyhktpu/2022_04_05/xehay_mbv_mb_20052021_1.jpg"
        },
        {
          id: 3,
          author: {
            name: "nguyenntnt",
            avatar:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy7A2lcHK0-953HuH4HE5gv05j2R4Ga84qvw&usqp=CAU"
          },
          title: "Ford ngừng nhận đặt hàng xe điện Mustang Mach-Ez",
          date: "20/4/2022",
          thumbnail: "https://znews-photo.zingcdn.me/w860/Uploaded/neg_estpyge/2022_04_20/Ford_Mustang_Mach_E_Zing_8_.jpg"
        },
        {
          id: 4,
          author: {
            name: "trannguengggi",
            avatar:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc2gbptIgY-ONJJtfrGV3j452K43bYpwHUiA&usqp=CAU"
          },
          title: "Săn sale hàng hiệu với ưu đãi đến 70%",
          date: "18/4/2022",
          thumbnail: "https://znews-photo.zingcdn.me/w860/Uploaded/natmzz/2022_04_22/2022_04_21T103911Z_277295454_RC2LRT972EVN_RTRMADP_3_SOCCER_ENGLAND_MUN.JPG"
        },
        {
          id: 5,
          author: {
            name: "aichettiet",
            avatar:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSwese3WMdVTlYe-5ZjU5S8L_gJXpTUKZa5g&usqp=CAU"
          },
          title: "Ten Hag nhận lương cao thứ 5 ở Ngoại hạng Anh",
          date: "23/4/2022",
          thumbnail: "https://znews-photo.zingcdn.me/w1200/Uploaded/bpivpawv/2022_04_21/DD_COMP_TEN_HAG_ANNOUNCED_v2.jpg"
        }
      ]
    },,
    {
      topic: "BLOCKCHAIN",
      posts: [
        {
          id: 1,
          author: {
            name: "vannguyen",
            avatar:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuWPkoD_BlrMnQbA3rx3OFD-xHD86fc3S3XA&usqp=CAU"
          },
          title: "FLC Faros bổ nhiệm chủ tịch mới",
          date: "23/4/202",
          thumbnail: "https://znews-photo.zingcdn.me/w860/Uploaded/rohuoct/2022_04_23/Chi_Binh_Phuong.jpg"
        },
        {
          id: 2,
          author: {
            name: "caracao",
            avatar:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTtw1U--5ExL_X-d_ePiCs0nrqdRwXauasyw&usqp=CAU"
          },
          title: "Phó chủ tịch FLC bị xử phạt vì kiêm nhiệm nhiều chức danh",
          date: "6/4/2022",
          thumbnail: "https://znews-photo.zingcdn.me/w860/Uploaded/mzdqa/2022_04_06/huong_nguyen_kieu_dung_flc2.jpg"
        },
        {
          id: 3,
          author: {
            name: "levanx",
            avatar:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy7A2lcHK0-953HuH4HE5gv05j2R4Ga84qvw&usqp=CAU"
          },
          title: "Vì sao tổng giám đốc FLC không ký các văn bản công bố thông tin?",
          date: "4/4/2022",
          thumbnail: "https://znews-photo.zingcdn.me/w860/Uploaded/aohunkx/2022_03_29/FLC_1.jpg"
        },
        {
          id: 4,
          author: {
            name: "hoangthis",
            avatar:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc2gbptIgY-ONJJtfrGV3j452K43bYpwHUiA&usqp=CAU"
          },
          title: "Ngân hàng sẽ không bán giải chấp cổ phiếu Bamboo Airways",
          date: "30/3/2022",
          thumbnail: "https://znews-photo.zingcdn.me/w860/Uploaded/aohunkx/2020_11_02/IMG_3862_bamboo_airways.jpg"
        },
        {
          id: 5,
          author: {
            name: "thichcauqua",
            avatar:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSwese3WMdVTlYe-5ZjU5S8L_gJXpTUKZa5g&usqp=CAU"
          },
          title: "Đồng hồ Esprit, Just Cavalli tạo chất riêng cho quý cô tinh tế",
          date: " 22/4/2022",
          thumbnail: "https://znews-photo.zingcdn.me/w1920/Uploaded/wyhktpu/2022_04_22/2_3.jpg"
        }
      ]
    }
  ];

  if (req.method === "GET") {
    res.status(200).json(postsList);
  }
}
