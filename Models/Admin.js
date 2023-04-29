const mongoose = require('mongoose')
const AdminSchema = mongoose.Schema({
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  phone: [{ type: String, required: true }],
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  roles: {
    super_admin: { type: String, default: 'admin' },
    admin: { type: String }
  }
})

const ADMIN = mongoose.model('admins', AdminSchema)
module.exports = ADMIN
