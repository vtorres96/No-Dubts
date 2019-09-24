const { User } = require('../models/');

module.exports = {
	async index(req, res) {
		const users = await User.findAll();
		console.log(users);
	},

	async buscarPorId(req,res) {
		const id = req.params.id
		const users = await User.findByPk(id);
		console.log(users);
	},
	
	async createUser(req,res) {
		await User.create({
			firstname: req.body.firstname,
			lasname: req.body.lastname,
			nickname: req.body.nickname,
			image: req.body.image,
			email: req.body.email,
			password_hash: req.body.password_hash,

		})
	},

	async updateUser(req,res) {
		const id = req.params.id
		await User.update({
			firstname: req.body.firstname,
			lastname: req.body.lastname,
			nickname: req.body.nickname,
			image: req.body.image,
			email: req.body.email,
			password_hash: req.body.password_hash, 
		},
		{
			where: {
				id : id
			},
		}).then((user)=>{
			res.send('Usuario alterado com sucesso')
		}).catch((error)=>{
			res.send("Algum erro foi encontrado" + error)
		})
	},

	async deleteUser(req,res){
		const id = req.params.id
		User.destroy({
			where: { id: id }
		}).then((user)=> {
			res.redirect('/');
		}).catch((error)=>{
			res.send('Erro ao deletar usuario' + error + id);
		})
	}
};
