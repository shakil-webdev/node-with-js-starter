const dotenv = require('dotenv')
const path = require('path')

dotenv.config({ path: path.join(process.cwd(), '.env') });

const config = {
    env: process.env.NODE_ENV,
    port: process.env.PORT,
    bycrypt_salt_rounds: process.env.BCRYPT_SALT_ROUNDS,
    // main database
};

module.exports = config;
