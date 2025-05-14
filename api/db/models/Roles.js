const mongoose = require("mongoose");
const RolePrivileges = require("./RolePrivileges");

const { Schema, Types } = mongoose;

const schema = new Schema(
  {
    role_name: { type: String, required: true, unique: true },
    is_active: { type: Boolean, default: true },
    created_by: {
      type: Types.ObjectId
    },
  },
  {
    versionKey: false,
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  }
);

class Roles extends mongoose.Model {
  static async deleteWithPrivileges(query) {
    console.log("🔥 deleteWithPrivileges çalıştı", query);

    if (query._id) {
      await RolePrivileges.deleteMany({
        role_id: new Types.ObjectId(query._id)
      });
    }

    await super.deleteOne(query);
  }
}

schema.loadClass(Roles);

module.exports = mongoose.model("roles", schema);
