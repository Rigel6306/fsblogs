const db = require('../config/db')

class Blogs {

    constructor() {

    }

    async getBlogs() {


        const resData = await db.execute('SELECT * FROM blogs').then((data) => {
            return data[0]
        }).catch((err) => {
            return err
        })

        return resData
    }

    async setBlogs(blogData) {
        const query = `INSERT INTO blogs    
                       (blog_name, blog_content, author)
                      VALUES 
                        ("${blogData.blog_name}",
                         "${blogData.blog_content}",
                         "${blogData.author}") `

        const  responce = await db.execute(query)
            .then(data => data)
            .catch((err) =>{
               throw err.message 
            })

        return responce

    }
    
    async deleteBlogs(id){
        const query =`DELETE FROM blogs where blog_id=${id}`
        const res = await  db.execute(query).then(res=>{
            return res
        }).catch(err=>{
            throw err.message
        })

        return res
    }

  

}

module.exports = { Blogs }