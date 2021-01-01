import React from 'react';
import {getUserDetails, getGuilds} from '../../utils/api';
import {MenuComponent} from '../../components'

export function MenuPage({history}) {

    const [user, setUser] = React.useState(null);
    const [loading, setLoading] = React.useState(true);
    const [guilds, setGuilds] = React.useState([]);

    React.useEffect(() => {
        getUserDetails().then(({data}) => {
            setUser(data);
            setLoading(false);
            return getGuilds();
        }).then(({data}) => {
            setGuilds(data);
        }).catch((err) => {
            history.push('/');
            setLoading(false);
        });
    }, [])

    return !loading && (
        <div>
            <h1>Menu Page</h1>
            <MenuComponent guilds={guilds}/>
        </div>
    )
}
