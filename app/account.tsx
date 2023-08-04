//@ts-nocheck
import React, {useEffect, useState} from 'react';
import Account from "@/components/auth/account";
import {Session} from "@supabase/supabase-js";
import {supabase} from "@/supabase";

const AccountScreen = () => {
  const [session, setSession] = useState<Session | null>(null)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
  }, []);
  return <Account
    session={session!}
  />
};

export default AccountScreen;
