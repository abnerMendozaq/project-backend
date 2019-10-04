module.exports = {
    /**http status */
    ERROR_404: 'ERROR EN EL REGISTRO',
    SERVER_500: 'ERROR INTERNO DEL SERVIDOR',
    ERROR_400: 'DATOS INVALIDOS',
    /**servicios de captcha */
    SERVER_CAPTCHA: 'https://google.com/recaptcha/api/siteverify',
    KEY_CAPTCHA: '6Le_GrcUAAAAALXG71pjpHT2R9Eja0CXnaEGFtP7',
    ERROR_CAPTCHA: 'SELECCIONE CAPTCHA',
    /**servicios de jwt */
    UNAUTHORIZED: 'USUARIO NO AUTORIZADO',
    TOKEN_EXPIRED: 'SU TOKEN HA EXPIRADO',
    INVALID_TOKEN: 'TOKEN INVALIDO',
    SECRET_KEY: 'miproyecto',
    /**autenticacion */
    USER_WRONG: 'USUARIO Y/O CONTRASEÑA INCORRECTOS',
    USER_BLOQUED: 'EL USUARIO NO EXISTE O ESTA BLOQUEADO',
    CONFIG_SESSION:{
        secret: 'secret',
        resave: true,
        saveUninitialized: true
    }
};