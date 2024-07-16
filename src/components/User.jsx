import {useEffect, useState} from 'react'

function UserProfile(){
    const [user, setUser] = useState(null);

    useEffect(() =>{
        const pegarDadosUsuarios = async () => {
            const resposta = await fetch('https://jsonplaceholder.typicode.com/users/1')
            const dadosUsuarios = await resposta.json()
            setUser(dadosUsuarios)
        }

        pegarDadosUsuarios()

        return () => setUser(null)
    }, [] )


    return (
        <div>
            {user ? (
                <div>
                    <h3>{user.name}</h3>
                    <p>{user.email}</p>
                </div>
            ) : (
                <p>Carregando perfil de usuários</p>
            )}
        </div>
    )
}

export default UserProfile