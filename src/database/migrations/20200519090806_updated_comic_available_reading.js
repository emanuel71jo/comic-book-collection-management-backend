const UPDATED_COMIC_AVAILABLE_READING = `
CREATE TRIGGER updatedcomicavailablereading AFTER UPDATE
ON reading
FOR EACH ROW
BEGIN
	UPDATE comic SET status = 1
    WHERE id = OLD.comic_id;
END
`;

const DROP_UPDATED_COMIC_AVAILABLE_READING = `
DROP TRIGGER updatedcomicavailablereading
`;


exports.up = async knex => knex.raw(UPDATED_COMIC_AVAILABLE_READING);
exports.down = async knex => knex.raw(DROP_UPDATED_COMIC_AVAILABLE_READING);
