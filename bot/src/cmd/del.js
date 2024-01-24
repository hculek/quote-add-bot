module.exports = {
    signature: 'del',

    exec(id, msg, mysql, cmd) {

        return mysql.execute(
            'UPDATE quotes SET is_deleted = 1 WHERE id = ?',
            [id],
            function(err, result) {

                if(err) {
                    return msg.reply('Error: ', err);
                }

                return msg.reply(`Quote ${id} deleted`);
            }
        );
    }
};