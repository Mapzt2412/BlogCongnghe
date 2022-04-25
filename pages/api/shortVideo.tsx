export default function handler(req, res) {
  const videosList = [
    {
      id: 1,
      thumbnail:
      "https://p16-sign-va.tiktokcdn.com/obj/tos-useast2a-p-0037-aiso/bc33288d9eff45dba3ea471730786f03?x-expires=1650877200&x-signature=aO80lHOG2PgL2td0GBOzYKUf%2BjE%3D",
      video:
      "https://v16-webapp.tiktok.com/1c3ac88d000da63769a58312e00d5a85/62666d31/video/tos/useast2a/tos-useast2a-pve-0037c001-aiso/69c3f64fc9f644928b08140a891595c8/?a=1988&br=1088&bt=544&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=eXd.6Hk_Myq8ZGzG4we2Nr2hml7Gb&l=20220425034302010244026189110A5106&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=ajM1Z2Y6Zm5yOzMzZjgzM0ApOzo0NTM1NDw7N2U8Zjk8NGcvLWcwcjRfM2pgLS1kL2NzczIwMTFhLmA1NF4wM2E0LzY6Yw%3D%3D&vl=&vr=",
      author: "dinhtrung",
      avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi7G9kJ5bJCS6MqZLpdqFsYarQvO_Bjy50yw&usqp=CAU"
    },
    {
      id: 2,
      thumbnail: "https://p16-sign-sg.tiktokcdn.com/obj/tos-alisg-p-0037/e7d91aedef474d2da7712d0cd5c4645f_1640273429?x-expires=1650877200&x-signature=d%2BT5r8iLwwB1Jf4%2BlyJesQfG1b4%3D",
      video: "https://v16-webapp.tiktok.com/b6484c66d414631109bb1fbb0769b91e/62666d33/video/tos/alisg/tos-alisg-pve-0037/0e8268b5744d4d87b028d298c8d8a1a8/?a=1988&br=1178&bt=589&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=6&er=&ft=eXd.6Hk_Myq8ZGzG4we2Nr2hml7Gb&l=20220425034302010244026189110A5106&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M2k0NTk6Zmg8OjMzODgzNEApOjs2OGhlM2U7NzZmNjNpPGctMC9vcjRvXi9gLS1kLy1zc2AuLV40LjQ2MS4vYDEyLzI6Yw%3D%3D&vl=&vr=",
      author: "toanvan",
      avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi7G9kJ5bJCS6MqZLpdqFsYarQvO_Bjy50yw&usqp=CAU"
    },
    {
      id: 3,
      thumbnail: "https://p16-sign.tiktokcdn-us.com/obj/tos-useast5-p-0068-tx/d4deead6567a43e3bf9729e799931792_1644878239?x-expires=1650877200&x-signature=z%2FbtPA2F2OUfkrSROzoRuUcYcR0%3D",
      video: "https://v16-webapp.tiktok.com/e067e43249c8c3e97e02ac1c1af9611a/62666d38/video/tos/maliva/tos-maliva-ve-0068c799-us/85123111d4104000a9a92c6ca7cade39/?a=1988&br=2350&bt=1175&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=eXd.6Hk_Myq8ZGzG4we2Nr2hml7Gb&l=20220425034302010244026189110A5106&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=MzQ8Nzc6ZjZnOzMzZzczNEApNjszN2QzOGU5Nzk0aWZnOWdfM19hcjRnZTJgLS1kMS9zc2BiYTAuMGAwNC02MzFgYS46Yw%3D%3D&vl=&vr=",
      author: "canhnguyen",
      avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuWPkoD_BlrMnQbA3rx3OFD-xHD86fc3S3XA&usqp=CAU" 
    },
    {
      id: 4,
      thumbnail: "https://p16-sign-va.tiktokcdn.com/obj/tos-useast2a-p-0037-aiso/51ca246685c54c5d9e3982429d95de17?x-expires=1650877200&x-signature=cnNEv5dLkzxkJ3h7cepqZ3gZkD8%3D",
      video: "https://v16-webapp.tiktok.com/6a8b5c094cf911a373e4c0582331e66a/62666d36/video/tos/useast2a/tos-useast2a-pve-0037-aiso/87c621011102468ea433a3b967e727ff/?a=1988&br=2812&bt=1406&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=eXd.6Hk_Myq8ZGzG4we2Nr2hml7Gb&l=20220425034302010244026189110A5106&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=anFmZTo6ZjhnODMzZjgzM0ApOzg2ZDwzaWRoN2U8NWg3O2duc25vcjQwXm1gLS1kL2Nzc2AuMTNeNjQuXmFiXzYvMTM6Yw%3D%3D&vl=&vr=",
      author: "cauvang",
      avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTtw1U--5ExL_X-d_ePiCs0nrqdRwXauasyw&usqp=CAU"
    },
    {
      id: 5,
      thumbnail: "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/666584018a5048998be537566d0bafc0?x-expires=1650877200&x-signature=sjN4e0j2IBoaw2kqurdgGPugNHs%3D",
      video : "https://v16-webapp.tiktok.com/b0172f35f265e5b12a465e0f4dc0a3e3/62666d36/video/tos/useast2a/tos-useast2a-ve-0068c004/7e35a17a280d4f09b439720707c8e7c6/?a=1988&br=950&bt=475&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=eXd.6Hk_Myq8ZGzG4we2Nr2hml7Gb&l=20220425034302010244026189110A5106&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=anRnM2Q6ZnBnNzMzNzczM0ApOjM2NzllPDs5N2czZmQ0NWdeXy0tcjQwZV5gLS1kMTZzc18xNC5eXmIuLzAuNl5jYWI6Yw%3D%3D&vl=&vr=",
      author: "nguyentnt",
      avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy7A2lcHK0-953HuH4HE5gv05j2R4Ga84qvw&usqp=CAU"
    },
    {
      id: 6,
      thumbnail: "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/9e466abb191e4d6bb8ebd2f08556357e?x-expires=1650877200&x-signature=2MLhOrtnv2%2BJDQhXnCN9Kt7PLZ0%3D",
      video: "https://v16-webapp.tiktok.com/d8a1480b0c0e47a484b4b7ac7de7b409/62666d36/video/tos/useast2a/tos-useast2a-ve-0068c001/9b1239f8b2cd4afc86b7487851c95d2d/?a=1988&br=434&bt=217&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=eXd.6Hk_Myq8ZGzG4we2Nr2hml7Gb&l=20220425034302010244026189110A5106&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=amY4ZDo6Zm9tODMzNzczM0ApZWg8OTxpZDxmN2dlZDczNGdhZDVhcjRnY2FgLS1kMTZzczMuMjJiXjMxYTAyLS4tMi86Yw%3D%3D&vl=&vr=",
      author: "trannguyen",
      avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc2gbptIgY-ONJJtfrGV3j452K43bYpwHUiA&usqp=CAU"
    },
    {
      id: 7,
      thumbnail: "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/ac4019c37809499b81ce5ab376f4b23e?x-expires=1650877200&x-signature=GjaT89ftolYtgWaAFxi0CVJeroo%3D",
      video: "https://v16-webapp.tiktok.com/7624726ffc9b9c6c2fd430d8430bf245/62666f2e/video/tos/useast2a/tos-useast2a-ve-0068c003/d3ba4031b4384da8bbcd9298ad0ef7d2/?a=1988&br=1662&bt=831&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=eXd.6Hk_Myq8ZZRG4we2NuWQml7Gb&l=20220425035130010245015205130B557E&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M2l5bmQ6ZmplOTMzNzczM0ApMzc5NDQ7aWQ5N2Y4aGY7OWcvNWEvcjQwczZgLS1kMTZzcy8tNmMtYS0wMi1eNGIzNWM6Yw%3D%3D&vl=&vr=",
      author: "aischetitet",
      avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSwese3WMdVTlYe-5ZjU5S8L_gJXpTUKZa5g&usqp=CAU"
    },
    {
      id: 8,
      thumbnail: "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/9e466abb191e4d6bb8ebd2f08556357e?x-expires=1650877200&x-signature=2MLhOrtnv2%2BJDQhXnCN9Kt7PLZ0%3D",
      video: "https://v16-webapp.tiktok.com/892e627053a0b2fd2e9a5d9867e1b910/62666f29/video/tos/maliva/tos-maliva-ve-0068c799-us/50255080081b4f59b1f98a7c553e415b/?a=1988&br=1638&bt=819&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=eXd.6Hk_Myq8ZZRG4we2NuWQml7Gb&l=20220425035130010245015205130B557E&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=anh0bGY6ZnlnOzMzZzczNEApM2Y1ZTUzZWU5N2RpOzpmZGc2X2BpcjRnNmNgLS1kMS9zczIzYDAzNC80NC9iMzRhNTM6Yw%3D%3D&vl=&vr=",
      author: "nguyenvan",
      avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuWPkoD_BlrMnQbA3rx3OFD-xHD86fc3S3XA&usqp=CAU"  
    },
    {
      id: 9,
      thumbnail: "https://p16-sign-va.tiktokcdn.com/obj/tos-useast2a-p-0037-aiso/c77c7a4889f043209aa6350e3e2f4400_1646109525?x-expires=1650877200&x-signature=YyTyvj1Tqj1foLzMN%2BYtF7MSRTg%3D",
      video: "https://v16-webapp.tiktok.com/e81122f863cedad575ad73645d4ea8f7/62666f2e/video/tos/useast2a/tos-useast2a-pve-0037-aiso/2cf3255c5eb449bcb9078d9a96d70d18/?a=1988&br=2262&bt=1131&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=eXd.6Hk_Myq8ZZRG4we2NuWQml7Gb&l=20220425035130010245015205130B557E&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M3c5OmU6Zmx0OzMzZjgzM0ApOjU5OWg3NDw2Nzg0PGU6Nmc0X15pcjRfM2JgLS1kL2Nzc2AyLTVgLjNiMS40MTA0Y2E6Yw%3D%3D&vl=&vr=",
      author: "rememberme",
      avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTtw1U--5ExL_X-d_ePiCs0nrqdRwXauasyw&usqp=CAU"
    },
    {
      id: 10,
      thumbnail: "https://p16-sign-va.tiktokcdn.com/obj/tos-useast2a-p-0037-aiso/87da42fef62d46299afa5e570ce9417c_1646359911?x-expires=1650787200&x-signature=BLHtRRL1qpLXuCfLFjLF%2FRYrKV0%3D",
      video: "https://v16-webapp.tiktok.com/4ce0d64e4a6d32946b2f2200a9fdbb64/62650406/video/tos/useast2a/tos-useast2a-pve-0037-aiso/d5b84fe9813e487a9c2fb8337ea1a48a/?a=1988&br=8080&bt=4040&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=eXd.6Hk_Myq8ZVlu4we2NmlQml7Gb&l=202204240201580102452431360157EDDA&lr=tiktok&mime_type=video_mp4&net=0&pl=0&qs=0&rc=ajl4OGY6ZndxOzMzZjgzM0ApNDw1OTg6OWVlNzQzZjs6M2dyXzMxcjRvNWRgLS1kL2NzczFeMF81LjY0NDZeMGFjM146Yw%3D%3D&vl=&vr="  ,
      author: "forgiveme",
      avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy7A2lcHK0-953HuH4HE5gv05j2R4Ga84qvw&usqp=CAU"
    },
    {
      id: 11,
      thumbnail: "https://p16-sign-va.tiktokcdn.com/obj/tos-useast2a-p-0037-aiso/89f59b18595a409aa906e1158568b665?x-expires=1650787200&x-signature=GU3ZJooqIpRnVMGwdOI9%2BZal1tc%3D",
      video: "https://v16-webapp.tiktok.com/f56d98043707f8ff9f6ae90fac3eb78c/6265044b/video/tos/useast2a/tos-useast2a-pve-0037-aiso/e84f79ea793a4defbab27b5f9ff54c72/?a=1988&br=3112&bt=1556&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=eXd.6Hk_Myq8ZVlu4we2NmlQml7Gb&l=202204240201580102452431360157EDDA&lr=tiktok&mime_type=video_mp4&net=0&pl=0&qs=0&rc=amhtPGk6Zm9oOzMzZjgzM0ApPDo4OTk5OWVmNzVlN2VoPGcwL2xtcjQwXmlgLS1kL2NzczYvMS9jLTRfXi8xYDE1MTE6Yw%3D%3D&vl=&vr="  ,
      author: "sosory",
      avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc2gbptIgY-ONJJtfrGV3j452K43bYpwHUiA&usqp=CAU"
    },
  ];

  if (req.method === "GET") {
    res.status(200).json(videosList);
  }
}
