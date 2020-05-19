const UPDATED_COMIC_AVAILABLE_LOAN_REMOVED = `
CREATE TRIGGER updatedcomicavailableloanremoved AFTER DELETE
ON loan
FOR EACH ROW
BEGIN
	UPDATE comic SET status = 1
    WHERE id = OLD.comic_id;
END
`;

const DROP_UPDATED_COMIC_AVAILABLE_LOAN_REMOVED = `
DROP TRIGGER updatedcomicavailableloanremoved
`;


exports.up = async knex => knex.raw(UPDATED_COMIC_AVAILABLE_LOAN_REMOVED);
exports.down = async knex => knex.raw(DROP_UPDATED_COMIC_AVAILABLE_LOAN_REMOVED);
