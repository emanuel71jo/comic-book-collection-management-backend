const UPDATED_COMIC_UNAVAILABLE_READING = `
CREATE TRIGGER updatedcomicunavailablereading AFTER INSERT
ON reading
FOR EACH ROW
BEGIN
	UPDATE comic SET status = 0
    WHERE id = NEW.comic_id;
END
`;

const DROP_UPDATED_COMIC_UNAVAILABLE_READING = `
DROP TRIGGER updatedcomicunavailablereading
`;


exports.up = async knex => knex.raw(UPDATED_COMIC_UNAVAILABLE_READING);
exports.down = async knex => knex.raw(DROP_UPDATED_COMIC_UNAVAILABLE_READING);
