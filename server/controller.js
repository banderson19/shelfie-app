module.exports = {
    getAll: (req, res, next) => {
        const dbInstance = req.app.get('db');

        dbInstance.get_shelfs()
        .then(shelfs => {
            console.log(1111, shelfs)
            res.status(200).send(shelfs)
        }).catch(err => res.status(500).send(err))
    },
    getOne: (req, res) => {
        const dbInstance = req.app.get('db');
        const {params} = req;

        dbInstance.get_shelf(params.shelf_id)
        .then(shelf => {
            console.log(222, shelf)
            res.status(200).send(shelf)
        }).catch(err => res.status(500).send(err))
    },
    getItem: (req, res) => {
        const dbInstance = req.app.get('db');
        const {params} = req;
        console.log(1111, params)
        dbInstance.get_item([params.bin_id])
        .then(item => {
            console.log(4444, item)
            res.status(200).send(item)
        }).catch(err => res.status(500).send(err))
    },
    addItem: (req, res) => {
        const dbInstance = req.app.get('db');
        const { params } = req;

        dbInstance.post_item(params.item_name, params.item_price)
        .then(item => {
            console.log(555, item)
            res.status(200).send(item)
        }).catch(err => res.status(200).send(err))
    }
}