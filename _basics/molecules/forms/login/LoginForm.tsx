import React, {
  ChangeEvent,
  FC,
  MouseEvent,
  useCallback,
  useState,
} from 'react';
import { useLazyQuery } from '@apollo/client';
import { IamOauthLoginQuery } from '@/components/iam/queries/iamOauthLoginQuery';
import { ApolloError } from '@apollo/client/errors';

import InputControlled from '@basics/molecules/formElements/inputControlled/InputControlled';
import Textlink from '@basics/atoms/typography/links/textlink/Textlink';
import Button from '@/components/_basics/atoms/formElements/button/Button';

import { LoginFormProps, LoginQueryData } from '@/interfaces';
import {
  StyledLoginForm,
  StyledLoginFormCTAWrapper,
  StyledLoginFormInput,
} from './LoginForm.styles';

export const LoginForm: FC<LoginFormProps> = (props) => {
  const {
    passwordForgetProps,
    signupProps,
    submitProps,
    onUserLoggedIn,
    onError,
  } = props;

  const [state, setState] = useState<{ userName: string; password: string }>({
    userName: '',
    password: '',
  });

  const onChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setState({ ...state, [e.target.name]: e.target.value });
    },
    [state],
  );

  const [postLogin, { loading }] = useLazyQuery(IamOauthLoginQuery, {
    onError: (loginError: ApolloError) => {
      if (onError) {
        onError(loginError);
      }
    },
    onCompleted: (loginData: LoginQueryData) => {
      if (onUserLoggedIn) {
        onUserLoggedIn(loginData?.iamOauthLogin);
      }
    },
  });

  const onSubmit = useCallback(
    (e: MouseEvent) => {
      e?.preventDefault();
      e?.stopPropagation();

      postLogin({
        variables: { username: state.userName, password: state.password },
      });
    },
    [state],
  );

  return (
    <StyledLoginForm>
      <StyledLoginFormInput>
        <InputControlled
          labelProps={{ label: 'Benutzername' }}
          inputProps={{
            name: 'userName',
            value: state.userName,
            onChange,
          }}
        />
      </StyledLoginFormInput>

      <StyledLoginFormInput>
        <InputControlled
          labelProps={{ label: 'Password' }}
          inputProps={{
            name: 'password',
            type: 'password',
            value: state.password,
            minLength: 4,
            onChange,
          }}
        />
      </StyledLoginFormInput>

      <StyledLoginFormCTAWrapper>
        {passwordForgetProps && (
          <Textlink
            href={passwordForgetProps.link}
            target={passwordForgetProps.target}
          >
            {passwordForgetProps.label}
          </Textlink>
        )}

        <div>
          {signupProps && (
            <Button
              buttonHref={signupProps.link}
              buttonLabel={signupProps.label}
            />
          )}

          <Button
            buttonLabel={submitProps.label}
            iconName={submitProps.icon}
            onClick={onSubmit}
            buttonDisabled={loading}
          />
        </div>
      </StyledLoginFormCTAWrapper>
    </StyledLoginForm>
  );
};

export default LoginForm;
