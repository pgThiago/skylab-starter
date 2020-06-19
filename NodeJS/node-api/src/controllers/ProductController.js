const mongoose = require('mongoose');

const Product = mongoose.model('Product');

module.exports = {
    async index(req, res){
        const { page = 1 } = req.query;
        try{
            const products = await Product.paginate({}, {page: 1, limit: 10});
            return res.json(products);
        }
        catch(e){ 
            console.log('Erro no index');
        }
    },

    async show(req, res){
        try{
            const product = await Product.findById(req.params.id);
            return res.json(product);
        }
        catch(e){ 
            console.log('Erro no show');
        }        
    },

    async store(req, res){
        try{
            const product = await Product.create(req.body);
            console.log(req.body);
            return res.json(product);
        }
        catch(e){ 
            console.log('Erro no store');
            //const product = await Product.create(req.body);
            console.log(req.body);
            //console.log(req.body);
            //console.log(e);
        }        
    },

    async update(req, res){
        try{
            const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
            return res.json(product);
        }
        catch(e){ 
            console.log('Erro no update');
        }
    },
    
    async destroy(req, res){
        try{
            await Product.findByIdAndRemove(req.params.id);
            return res.send()
        }
        catch(e){ 
            console.log('Erro no destroy');
        }
    }
};