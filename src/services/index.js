import axios from 'axios'

export default {
	// getAllPublication (page) {
	// 	return axios.get(`https://webapi.bps.go.id/v1/api/list/model/publication/domain/1214/page/${page}/key/da8dcdbc4ba3eb5d72f58002158778a4/`)
	// },
	getAllPublication (page, keyword) {
		return axios.get(`https://webapi.bps.go.id/v1/api/list/model/publication/domain/1214/page/${page}/keyword/${keyword}/key/da8dcdbc4ba3eb5d72f58002158778a4/`)
	},
	// getSearchPublication (keyword) {
	// 	return axios.get(`https://webapi.bps.go.id/v1/api/list/model/publication/domain/0000/keyword/${keyword}/key/da8dcdbc4ba3eb5d72f58002158778a4/`)
	// },
	getAllInfografis (page) {
		return axios.get(`https://webapi.bps.go.id/v1/api/list/model/infographic/domain/1214/page/${page}/key/da8dcdbc4ba3eb5d72f58002158778a4/`)
	},
	getAllInfografisPusat (page) {
		return axios.get(`https://webapi.bps.go.id/v1/api/list/model/infographic/domain/0000/page/${page}/key/da8dcdbc4ba3eb5d72f58002158778a4/`)
	},
	getDetail (id) {
		return axios.get('/example/' + id)
	},
	getKondefIndikator () {
		return axios.get('http://kaonira.web.id/metadata/indikator')
	},
	getKondefVariabel () {
		return axios.get('http://kaonira.web.id/metadata/variabel')
	},
	getIndikator () {
		return axios.get('http://kaonira.web.id/indikator/nilai')
	},
}