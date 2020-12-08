import LoginRepository from "./LoginRepository";

const repositories = {
    login: LoginRepository,
}

export const RepositoryFactory = {
    get: name => repositories[name]
};