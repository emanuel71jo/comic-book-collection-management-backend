const UPDATED_COMIC_AVAILABLE_LOAN = `
CREATE TRIGGER updatedcomicavailableloan AFTER UPDATE
ON loan
FOR EACH ROW
BEGIN
	UPDATE comic SET status = 1
    WHERE id = OLD.comic_id;
END
`;

const DROP_UPDATED_COMIC_AVAILABLE_LOAN = `
DROP TRIGGER updatedcomicavailableloan
`;


exports.up = async knex => knex.raw(UPDATED_COMIC_AVAILABLE_LOAN);
exports.down = async knex => knex.raw(DROP_UPDATED_COMIC_AVAILABLE_LOAN);
