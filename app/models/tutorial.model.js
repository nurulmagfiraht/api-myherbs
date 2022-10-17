const Mongoose = require("mongoose");

module.exports = mongoose => {
  var schema = mongoose.Schema(
    {
      nama_tanaman: String,
      nama_latin: String,
      gambar: String,
      khasiat: String,
      pengolahan: String,
      deskripsi: String,
      komen: [{
        user: {
          type : Mongoose.Schema.Types.ObjectId,
          ref: 'User',
          required: true
        },
        komen: {
          type : String,
          required: true
        }
      }],
      validate: Boolean,
    },
    { timestamps: true }
  );

  schema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Tutorial = mongoose.model("tutorial", schema);
  return Tutorial;
};
