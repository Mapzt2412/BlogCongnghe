export default function handler(req, res) {
  const videosList = [
    {
      id: 1,
      thumbnail:
        "https://p16-sign-va.tiktokcdn.com/obj/tos-useast2a-p-0037-aiso/9c94fb853a0c47aeae1b88aeb25a5f42?x-expires=1650783600&x-signature=pxu6H2dfb%2F%2BBE%2FgnPgi6D%2FbdqD8%3D",
      video:
        "https://v16-webapp.tiktok.com/8d15c36a3dbe4c314009fcbd8dd1bef9/62650223/video/tos/useast2a/tos-useast2a-pve-0037-aiso/9746841b23c54a5093644d487089bf9b/?a=1988&br=1004&bt=502&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=eXd.6Hk_Myq8Zc-u4we2Nznhml7Gb&l=202204240153430102451540992757A7FE&lr=tiktok&mime_type=video_mp4&net=0&pl=0&qs=0&rc=ajk1ODw6ZnlsPDMzZjgzM0ApM2czOTdkZWU0NzdmaDk8NWduLW0ucjQwMjNgLS1kL2Nzc2NgYGMvNDJiYi4xLTBiLjQ6Yw%3D%3D&vl=&vr="
    },
    {
      id: 2,
      thumbnail: "https://p16-sign-va.tiktokcdn.com/obj/tos-useast2a-p-0037-aiso/8edac21518fb41208a17013883747c9e?x-expires=1650783600&x-signature=JpG4CYfHEnNOQRtDNhzJeyy61qM%3D",
      video: "https://v16-webapp.tiktok.com/3f88f98fe86db37e86c41272fb092bca/62650211/video/tos/useast2a/tos-useast2a-pve-0037-aiso/cab81d2bf4d2471bb4d365395f8d3bb0/?a=1988&br=3792&bt=1896&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=eXd.6Hk_Myq8Zc-u4we2Nznhml7Gb&l=202204240153430102451540992757A7FE&lr=tiktok&mime_type=video_mp4&net=0&pl=0&qs=0&rc=MzluaDs6ZjM8PDMzZjgzM0ApOTloaDk0OTtkNzhmaWRoZ2c2bmRfcjRvYjRgLS1kL2Nzcy4yMzUyMmE1MzNhMDEzLS06Yw%3D%3D&vl=&vr="  
    },
    {
      id: 3,
      thumbnail: "https://p16-sign-va.tiktokcdn.com/obj/tos-useast2a-p-0037-aiso/33aed49fe31d43adae41f5461a5f1bf4?x-expires=1650783600&x-signature=WORIScbXLx82qX9s0NmnBEjgUIQ%3D",
      video: "https://v16-webapp.tiktok.com/802f7bf92ab70345751b8b6bb6b5f7f5/62650221/video/tos/useast2a/tos-useast2a-pve-0037-aiso/de5d10cb9b4b4f99b8acb768b291072c/?a=1988&br=1930&bt=965&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=eXd.6Hk_Myq8Zc-u4we2Nznhml7Gb&l=202204240153430102451540992757A7FE&lr=tiktok&mime_type=video_mp4&net=0&pl=0&qs=0&rc=anluOTc6ZmhxOzMzZjgzM0ApZzQ7ZWY8O2U0NzxlZTZmaGctZWVwcjRnMjZgLS1kL2NzczUuMzIwNmE2NjEtNl9gNWI6Yw%3D%3D&vl=&vr="  
    },
    {
      id: 4,
      thumbnail: "https://p16-sign-va.tiktokcdn.com/tos-useast2a-p-0037-aiso/88916e67e4de4ec7b49ca27c4f7580da_1649047118~tplv-dmt-logom:tos-useast2a-pv-0037-aiso/3f0b8af1a4ae494e8b904308a1f0c5a3.image?x-expires=1650783600&x-signature=IspUp9JFC073QMGBdKMaGUhjzFY%3D",
      video: "https://v16-webapp.tiktok.com/2df7aa1759167a857ba74b8b4f34a986/6265023b/video/tos/useast2a/tos-useast2a-pve-0037c001-aiso/095ed67dc8c44be7b1d9a8463f0234e2/?a=1988&br=3458&bt=1729&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=eXd.6Hk_Myq8Zc-u4we2Nznhml7Gb&l=202204240153430102451540992757A7FE&lr=tiktok&mime_type=video_mp4&net=0&pl=0&qs=0&rc=amR2Nmc6Zng6PDMzZjgzM0ApOmY7ZjZoOGU8Nzo1OjYzO2dfcG0tcjRvXjJgLS1kL2Nzc2BfMDVhYC1eMV4zMjNhMDM6Yw%3D%3D&vl=&vr="  
    },
    {
      id: 5,
      thumbnail: "https://p16-sign-va.tiktokcdn.com/tos-useast2a-p-0037-aiso/e347f17ed51a4d809c25ed1864771fa6_1644321686~tplv-dmt-logom:tos-useast2a-pv-0037-aiso/de43669a8b0343a5a23fceb693ea0743.image?x-expires=1650783600&x-signature=X3jmEWBIF79TB%2Fw%2FqfO5TZ5Js18%3D",
      video: "https://v16-webapp.tiktok.com/cec70917379885fbb9b706ea5a14faf2/62650242/video/tos/useast2a/tos-useast2a-pve-0037-aiso/2a1227d62cf342b08ed65439c470a59e/?a=1988&br=2840&bt=1420&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=eXd.6Hk_Myq8Zc-u4we2Nznhml7Gb&l=202204240153430102451540992757A7FE&lr=tiktok&mime_type=video_mp4&net=0&pl=0&qs=0&rc=anN1OGQ6Zjk4OzMzZjgzM0ApaTc5M2U8NTs1NzxkNmY4NmdiMG5ncjRnaC5gLS1kL2Nzc2I1NS5jYC8wNi4wMC9fLWA6Yw%3D%3D&vl=&vr="  
    },
    {
      id: 6,
      thumbnail: "https://p16-sign-va.tiktokcdn.com/obj/tos-useast2a-p-0037-aiso/091e7597f55a43ed9819380b77a44da2?x-expires=1650783600&x-signature=1h3%2Bk5j095%2ByyfPH7IjuNjQFNM8%3D",
      video: "https://v16-webapp.tiktok.com/0198f3b088f1a78e71b7093f877828d7/62650223/video/tos/useast2a/tos-useast2a-pve-0037-aiso/a4b00c00f7b94ff98f7e171df49e8779/?a=1988&br=1336&bt=668&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=eXd.6Hk_Myq8Zc-u4we2Nznhml7Gb&l=202204240153430102451540992757A7FE&lr=tiktok&mime_type=video_mp4&net=0&pl=0&qs=0&rc=ajQ4cTc6ZjtxOzMzZjgzM0ApZWU5NzppZWU7NzM4NTVkOmdzZWU2cjRfaG5gLS1kL2NzczMyYDAyXzMvYmIuNV5jLV86Yw%3D%3D&vl=&vr="  
    },
    {
      id: 7,
      thumbnail: "https://p16-sign-va.tiktokcdn.com/obj/tos-useast2a-p-0037-aiso/69c11f6bf8314a669bf78c3ed0fda33a_1649152208?x-expires=1650783600&x-signature=thbUVjNLnhOu1PAB%2BDz5v8UyI%2F0%3D",
      video: "https://v16-webapp.tiktok.com/ff44132ce4a13b091b96822316bc7ef1/62650236/video/tos/useast2a/tos-useast2a-pve-0037-aiso/5f15725cc1d0473484c1bdf29f322787/?a=1988&br=3920&bt=1960&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=eXd.6Hk_Myq8Zc-u4we2Nznhml7Gb&l=202204240153430102451540992757A7FE&lr=tiktok&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M3lwZTM6Zjc0PDMzZjgzM0ApN2g8MzNnN2Q1NzVmZzloOGduX3I2cjRvLjNgLS1kL2NzczFgYDMyYDUxNTYzNC4yMjE6Yw%3D%3D&vl=&vr="  
    },
    {
      id: 8,
      thumbnail: "https://p16-sign-va.tiktokcdn.com/obj/tos-useast2a-p-0037-aiso/9809cc1441c14dc489f5793d7f773994?x-expires=1650783600&x-signature=xZrIYtDXy%2BDgfh1mwAzuYIxB0yI%3D",
      video: "https://v16-webapp.tiktok.com/a88c3e1e2eb65ac242a26921f59261ce/62650239/video/tos/useast2a/tos-useast2a-pve-0037-aiso/b275e8e7bd7a463f8f805648bf3efe4d/?a=1988&br=3510&bt=1755&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=eXd.6Hk_Myq8Zc-u4we2Nznhml7Gb&l=202204240153430102451540992757A7FE&lr=tiktok&mime_type=video_mp4&net=0&pl=0&qs=0&rc=MzZpbTg6ZmtlPDMzZjgzM0ApODs0PDk3O2Q2NzgzNTQ7M2dsZTRecjRnZ2FgLS1kL2Nzc15iYzAyYl9gM14zNF5iYS06Yw%3D%3D&vl=&vr="  
    },
    {
      id: 9,
      thumbnail: "https://p16-sign.tiktokcdn-us.com/obj/tos-useast5-p-0068-tx/6e244f2ba0ed43db9bb52ee2d03e501c?x-expires=1650783600&x-signature=jiIsJm%2FfkzTCSWMhuxVWqZ4hJfA%3D",
      video: "https://v16-webapp.tiktok.com/846dbbabc8322aa67d9b0ec8a79126f0/62650225/video/tos/maliva/tos-maliva-ve-0068c799-us/472b803b3e1a40478a7c5b3bca44e3ef/?a=1988&br=2700&bt=1350&cd=0%7C0%7C0%7C0&ch=0&cr=0&cs=0&dr=0&ds=3&er=&ft=eXd.6Hk_Myq8Zc-u4we2Nznhml7Gb&l=202204240153430102451540992757A7FE&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=ajRqOjY6ZnF5PDMzZzczNEApNzg2ZjU4Ojw7NzU8ODxlO2dpMzYvcjRfa2VgLS1kMS9zczNgMTA1NF4wMjMyNl40Mi86Yw%3D%3D&vl=&vr="  
    },
    {
      id: 10,
      thumbnail: "https://p16-sign-va.tiktokcdn.com/obj/tos-useast2a-p-0037-aiso/87da42fef62d46299afa5e570ce9417c_1646359911?x-expires=1650787200&x-signature=BLHtRRL1qpLXuCfLFjLF%2FRYrKV0%3D",
      video: "https://v16-webapp.tiktok.com/4ce0d64e4a6d32946b2f2200a9fdbb64/62650406/video/tos/useast2a/tos-useast2a-pve-0037-aiso/d5b84fe9813e487a9c2fb8337ea1a48a/?a=1988&br=8080&bt=4040&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=eXd.6Hk_Myq8ZVlu4we2NmlQml7Gb&l=202204240201580102452431360157EDDA&lr=tiktok&mime_type=video_mp4&net=0&pl=0&qs=0&rc=ajl4OGY6ZndxOzMzZjgzM0ApNDw1OTg6OWVlNzQzZjs6M2dyXzMxcjRvNWRgLS1kL2NzczFeMF81LjY0NDZeMGFjM146Yw%3D%3D&vl=&vr="  
    },
    {
      id: 11,
      thumbnail: "https://p16-sign-va.tiktokcdn.com/obj/tos-useast2a-p-0037-aiso/89f59b18595a409aa906e1158568b665?x-expires=1650787200&x-signature=GU3ZJooqIpRnVMGwdOI9%2BZal1tc%3D",
      video: "https://v16-webapp.tiktok.com/f56d98043707f8ff9f6ae90fac3eb78c/6265044b/video/tos/useast2a/tos-useast2a-pve-0037-aiso/e84f79ea793a4defbab27b5f9ff54c72/?a=1988&br=3112&bt=1556&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=eXd.6Hk_Myq8ZVlu4we2NmlQml7Gb&l=202204240201580102452431360157EDDA&lr=tiktok&mime_type=video_mp4&net=0&pl=0&qs=0&rc=amhtPGk6Zm9oOzMzZjgzM0ApPDo4OTk5OWVmNzVlN2VoPGcwL2xtcjQwXmlgLS1kL2NzczYvMS9jLTRfXi8xYDE1MTE6Yw%3D%3D&vl=&vr="  
    },
  ];

  if (req.method === "GET") {
    res.status(200).json(videosList);
  }
}
