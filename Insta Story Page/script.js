var arr = [
  {
    dp: "https://images.unsplash.com/photo-1696385989343-0df3db3c70c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60",
    story:
      "https://plus.unsplash.com/premium_photo-1694825173871-7b5df4d57ba5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    dp: "https://images.unsplash.com/photo-1696347284654-b952434231e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    story:
      "https://images.unsplash.com/photo-1695349091210-ad56d3dfd1e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzM3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    dp: "https://images.unsplash.com/photo-1696446701509-4426e67950b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwyNXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    story:
      "https://images.unsplash.com/photo-1647891938250-954addeb9c51?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwzMXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    dp: "https://images.unsplash.com/photo-1696063429824-b0f45cd175eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    story:
      "https://plus.unsplash.com/premium_photo-1694670200212-3122e7c5c9b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyOXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  }
];
var storiyan =document.querySelector("#storiyan")
var clutter = "";

arr.forEach(function (elem, idx) {
  clutter += `<div class="story">
   <img id="${idx}" src="${elem.dp}" alt=""> </div>`;
});
storiyan.innerHTML = clutter;

storiyan.addEventListener("click", function(dets){
    document.querySelector("#full-screen").style.display="block"
    document.querySelector("#full-screen").style.backgroundImage =`url(${arr[dets.target.id].story})`

    setTimeout(() => {
        document.querySelector("#full-screen").style.display="none"
    }, 2000);
})