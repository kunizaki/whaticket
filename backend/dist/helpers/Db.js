const mysql = require('mysql2/promise');

const createConnection = async () => {
	return await mysql.createConnection({
		host: process.env.DB_HOST,
		user: process.env.DB_USER,
		password: process.env.DB_PASS,
		database: process.env.DB_NAME
	});
}

const getReply = async (keyword) => {
	return false;
}

const getAgendamento = async (dataEnvio) => {
	return false;
}

const setAgendamento = async (id) => {
	return false;
}

const getChatBot = async (msgFrom) => {
	return false;
}

const setChatBotOff = async (msgFrom) => {
	return false;
}

const setChatBotOn = async (msgFrom) => {
	return false;
}

const getDialogFlowAudio = async (msgFrom) => {
	return false;
}

const setDialogOffAudio = async (msgFrom) => {
	return false;
}

const setDialogOnAudio = async (msgFrom) => {
	return false;
}

const getDialogFlow = async (msgFrom) => {
	return false;
}

const setDialogOff = async (msgFrom) => {
	return false;
}

const setDialogOn = async (msgFrom) => {
	return false;
}

const setContactDialog = async (msgFrom) => {
	return false;
}

const getContactDialog = async (msgFrom) => {
	return false;
}

const getHorarioInicio = async () => {
	return false;
}

const getHorarioTermino = async () => {
	return false;
}

const getLimiteUsuario = async () => {
	return false;
}

const getLimiteWhatsApp = async () => {
	return false;
}

const setProtocolo = async (usuario, protocolo) => {
	return false;
}

const getWhatsAppId = async (ticketid) => {
	const connection = await createConnection();
	const [rows] = await connection.execute('SELECT whatsappId FROM Tickets WHERE id = ?', [ticketid]);
	if (rows.length > 0) return rows;
	return false;
}

module.exports = {
	createConnection,
	getReply,
	getAgendamento,
	setAgendamento,
	getDialogFlow,
	setDialogOff,
	setDialogOn,
	getDialogFlowAudio,
	setDialogOffAudio,
	setDialogOnAudio,
	setContactDialog,
	getContactDialog,
	getChatBot,
	setChatBotOn,
	setChatBotOff,
	getHorarioInicio,
	getHorarioTermino,
	getLimiteUsuario,
	getLimiteWhatsApp,
	setProtocolo,
	getWhatsAppId
}