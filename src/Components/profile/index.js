import React from 'react'
import * as S from './styled'

const Profile = () => {
    return (
        <S.Wrapper>
            <S.WrapperImg 
                src="https://avatars.githubusercontent.com/u/74997292?v=4" 
                alt="avatar do usuario" />
            <S.WrapperInfosUser>
                <div>
                    <h1>Guilherme Costa</h1>
                    <S.WrapperUserName>
                        <h3>Username: </h3>
                        <span>GuilhermeCostaDF</span>
                    </S.WrapperUserName>
                </div>
                <S.WrapperStatusCount>
                    <div>
                        <h4>Followers</h4>
                        <span>10</span>
                    </div>
                    <div>
                        <h4>Starred</h4>
                        <span>10</span>
                    </div>
                    <div>
                        <h4>Following</h4>
                        <span>10</span>
                    </div>
                </S.WrapperStatusCount>
            </S.WrapperInfosUser>
        </S.Wrapper>
    )
}

export default Profile;