import { useAuth } from '../../hooks/useAuth'
import { useCallback, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { motion, AnimatePresence } from 'framer-motion'

import IComponentProps from 'components/@types/componentProps'
import LoginForm from 'components/loginForm'
import RegisterForm from 'components/registerForm'
import ThemeSwitcher from 'components/themeSwitcher'

export default function Auth ({ toggleTheme }: IComponentProps) {
  const { user, signIn, signUp } = useAuth()
  const navigate = useNavigate()

  const [authenticating, setAuthenticating] = useState(true);

  const toggleForm = useCallback(() => {
    setAuthenticating(!authenticating);
  }, [authenticating]);

  useEffect(() => {
    if (user) {
      navigate('dashboard')
    }
  })

  const variants = {
    initial: { opacity: 0 },
    animate: {
      opacity: [0, 0.5, 1],
      transition: {
        delay: 0.5
      }
    }
  };

  return (
    <>
      <AnimatePresence>
        <motion.div variants={variants} initial="initial" animate='animate' >
          {authenticating ? 
            <LoginForm signIn={signIn} callback={toggleForm} /> 
            : <RegisterForm signUp={signUp} callback={toggleForm} 
          />}
        </motion.div>
      </AnimatePresence>
      {toggleTheme && <ThemeSwitcher toggleTheme={toggleTheme} />}
    </>
  )
}