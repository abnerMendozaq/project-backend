module.exports = {
    /**usuario */
    listarUsuarios: '/user/list',
    obtenerUsuario: '/user/one',
    crearUsuario: '/user/create',
    actualizarUsuario: '/user/update',
    eliminarUsuario: '/user/delete',
    /**auth */
    login: '/auth/login',
    /**persona */
    listarPersonas: '/person/list',
    obtenerPersona: '/person/one',
    crearPersona: '/person/create',
    actualizarPersona: '/person/update',
    eliminarPersona: '/person/delete',
    /**lvc */
    listarLvcs: '/lvc/list',
    obtenerLvc: '/lvc/one',
    /**ufv */
    listarUfvs: '/ufv/list',
    obtenerUfv: '/ufv/one',
    crearUfv: '/ufv/create',
    crearUfvs: '/ufv/create-array',
    actualizarUfv: '/ufv/update',
    eliminarUfv: '/ufv/delete',
    /**interes */
    listarIntereses: '/interest/list',
    obtenerInteres: '/interest/one',
    crearInteres: '/interest/create',
    actualizarInteres: '/interest/update',
    eliminarInteres: '/interest/delete',
    /**calendario */
    listarFeriados: '/calendar/list',
    agregarFeriados: '/calendar/create-array',
    /**consultora */
    listarConsultoras: '/consultant/list',
    obtenerConsultora: '/consultant/one',
    crearConsultora: '/consultant/create',
    actualizarConsultora: '/consultant/update',
    eliminarConsultora: '/consultant/delete',
    /**empresa */
    listarEmpresas: '/company/list',
    obtenerEmpresa: '/company/one',
    crearEmpresa: '/company/create',
    actualizarEmpresa: '/company/update',
    eliminarEmpresa: '/company/delete',
    /**transacciones */
    crearUsuarioConsultora: '/transaction/user-consultant',
    crearUsuarioEmpresa: '/transaction/user-company',
    crearLvcForm200_400: '/transaction/lvc-200-400'
}