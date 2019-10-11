module.exports = Object.freeze({
    GET_GALLERY_ITEMS: `SELECT "Id", "Order", "Url"
                        FROM public."dbo.Gallery"
                        ORDER BY "Order"`,
    GET_RESERVATION_ITEMS: `SELECT "Id", "DateFrom", "DateTo"
                            FROM public."dbo.Reservations"
                            ORDER BY "DateFrom"`
});