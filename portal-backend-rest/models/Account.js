const mongoose = require('mongoose');

const AccountSchema = new mongoose.Schema({
  name: { type:  String, required: true },
  is_student: { type:  Boolean  },
  username: { type:  String, required: true },
  email: { type:  String, required: true },
  followers: { type:  Array  },
  following: { type:  Array  },
  likes: { type:  Array  },
  __t: { type:  String  },
  isUmbrellaOrg: { type:  Boolean  },
  organizations: { type:  Array  },
  __v: { type:  String  },
  password: { type: String, required: true  },
});

module.exports = mongoose.model('Account', AccountSchema);
