export const createFavorite = (favorite) => (
    $.ajax({
        method: 'POST',
        url: `/api/favorites/`,
        data: { favorite }
    })
)

export const deleteFavorite = (favorite) => (
    $.ajax({
        method: 'DELETE',
        url: `/api/favorites/${favorite.id}`,
    })
)