

const blogModel = require('../model/blogModel')

const blogIns = new blogModel.Blogs()

exports.getBlogs = async (req, res) => {
  blogIns.getBlogs().then((data) => {
    res.json(data)
  })

}

exports.postblogs = async (req, res) => {
  blogIns.setBlogs(req.body).then((data) => {
    res.send('success')
  }).catch((err) => {
    res.status(400).send(err)
  })
}


exports.deletBlogs = async (req, res) => {
  blogIns.deleteBlogs(req.query.blog_id)
  .then(resData=>res.send('deleted successfully'))
  .catch(err=>res.status(400).send(err))
}


