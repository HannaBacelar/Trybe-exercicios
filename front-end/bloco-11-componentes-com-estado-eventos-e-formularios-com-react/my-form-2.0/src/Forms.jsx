import React from 'react';
import './App';



class Forms extends React.Component {
     constructor() {
        super();
        this.state = {
            nome: '',
            email: '',
            cpf: 0,
            endereco: '',
            cidade: '',
            estado:'',
            casa: false,
            apto:false,
            resumo: '',
            cargo: '',
            descriçãoCargo: '',
    } 

    }
    render() {
        return (
            <form>
                <fieldset>
                    <div>
                    <p>Dados Pessoais</p>
                    </div>
                    <label>
                        Nome:
                        <input
                            type="text"
                            maxlength="40"
                            id="nome"
                            name="nome"
                            placeholder="Digite seu nome"
                            required
                        />
                    </label>
                    <label>
                        Email:
                        <input
                            type="text"
                            maxlength="50"
                            id="email"
                            name="email"
                            placeholder="Digite seu Email"
                            required
                        />
                    </label>
                    <label>
                        CPF:
                        <input
                            type="text"
                            maxlength="11"
                            id="cpf"
                            name="cpf"
                            placeholder="Digite seu CPF"
                            required
                        />
                    </label>
                    <label>
                        Endereço:
                        <input
                            type="text"
                            maxlength="200"
                            id="endereco"
                            name="endereco"
                            placeholder="Digite seu Endereço"
                            required
                        />
                    </label>
                    <label>
                        Cidade:
                        <input
                            type="text"
                            maxlength="28"
                            id="cidade"
                            name="cidade"
                            placeholder="Digite sua Cidade"
                            required
                        />
                    </label>
                    <label>
                        Estado:
                        <select
                        type="text"
                        maxlength="28"
                        id="estado"
                        name="estado"
                        placeholder="Selecione seu Estado"
                        required
                        />
                    </label>
                    <label>
                        Tipo de Moradia:
                        <input
                            type="radio"
                            maxlength="28"
                            id="casa"
                            name="casa"
                            required
                        /> Casa:
                        <input
                            type="radio"
                            maxlength="28"
                            id="apto"
                            name="apto"
                            required
                        /> Apartamento:
                    </label>
                </fieldset>
                <fieldset>
                    Dados do ultimo emprego:
                <label>
                        Resumo do currículo:
                        <textarea
                            type="textarea"
                            maxlength="100"
                            id="resumo"
                            name="resumo"
                            placeholder="Resumo do seu currículo"
                            required
                        />
                    </label>
                    <label>
                        Cargo:
                        <textarea
                            type="textarea"
                            maxlength="40"
                            id="cargo"
                            name="cargo"
                            placeholder="Digite seu cargo"
                            required
                        />
                    </label>
                    <label>
                        Descrição do cargo:
                        <textarea
                            type="text"
                            maxlength="500"
                            id="cargo"
                            name="descriçãoCargo"
                            placeholder="Descreva as funções do cargo"
                            required
                        />
                    </label>
                </fieldset>
                <button>Limpar formulário</button>
            </form>
        );
    }
}
export default Forms;