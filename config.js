// Arquivo: config.js
// Aqui ficam todas as chaves e nomes das tabelas do Supabase

const CONFIG = {
    SUPABASE_URL: 'https://myulndnkmzthjlrmyfnk.supabase.co',
    SUPABASE_ANON_KEY: 'sb_publishable_R0Bik6nRRPuTjNauBdTo7A_Ey-5CbdW',
    
    // Configurações do seu banco de dados
    TABELA_USUARIOS: 'login_prestadores_iqp',
    COLUNA_EMAIL: 'email',
    COLUNA_SENHA: 'password',
    COLUNA_NOME_PRESTADOR: 'prestador',

    // Permissão
    COLUNA_PERMISSAO: 'perm' // Nome da coluna de admin/prestador
};
