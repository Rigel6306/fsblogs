
const blogList =  document.querySelector('.blogList');
const form =  document.querySelector('.blogForm')
const submitBtn = document.querySelector('.formSubmit')

    document.addEventListener ("DOMContentLoaded", async(event) => {

     const responceData = await fetch('http://localhost:5000/blogs/getblogs')
                            .then(data=>data.json())
                            .then(jdata=> jdata)
                            .catch(err=>console.log(err))

    console.log(responceData)
    responceData.forEach((rd)=>{
        blogList.innerHTML += ` <div class="blogHead">
                                <h1>${rd.blog_name}</h1>
                                </div>
                                <div class="blogBody">
                                    <p>${rd.blog_content}</p>
                                </div>
                                <div class="blogAuthor">
                                    <h4>${rd.author}</h4>
                                </div>`
    })
    

  });

submitBtn.addEventListener("click",(e)=>{

    e.preventDefault();
    const formData = new FormData(form)
    const payload = JSON.stringify(Object.fromEntries(formData.entries())) 
    console.log(payload)

            fetch('http://localhost:5000/blogs/postblogs',{
                method:"POST",
                headers:{
                    "Content-Type":"Application/json",
                    "Accept":"Application/json"
                },
                body:payload
            }).then(()=>{
                form.reset()
            })



})




