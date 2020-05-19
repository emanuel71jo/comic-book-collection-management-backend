const UPDATED_COMIC_AVAILABLE_READING_REMOVED = `
CREATE TRIGGER updatedcomicavailablereadingremoved AFTER DELETE
ON reading
FOR EACH ROW
BEGIN
	UPDATE comic SET status = 1
    WHERE id = OLD.comic_id;
END
`;

const DROP_UPDATED_COMIC_AVAILABLE_READING_REMOVED = `
DROP TRIGGER updatedcomicavailablereadingremoved
`;


exports.up = async knex => knex.raw(UPDATED_COMIC_AVAILABLE_READING_REMOVED);
exports.down = async knex => knex.raw(DROP_UPDATED_COMIC_AVAILABLE_READING_REMOVED);
