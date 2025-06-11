export default function Button2() {

  const handleClick = ((event) => {
    event.target.textContent = "OUGH😂"
  })

  return(
    <button onDoubleClick={(event) => handleClick(event)} className="text-white bg-red-500 text-3xl p-2 border-none rounded-[20px] cursor-pointer">
      Click me 😀
    </button>
  )
}

// const handleClick2 = ((name) => {
//   alert(name);
// })

/* <button onClick={() => handleClick2("GEETHAA")} className="text-white bg-red-500 text-3xl p-2 border-none rounded-[20px] cursor-pointer">
  Click me 😀
</button> */


// let count = 0;
// const handleClick = (name) => {
//   if(count < 3) {
//     count++
//     alert(name)
//   } else{
//     alert(name + " YOU CLIKE ME MORE THAN 3 TIMES..")
//   }
// }