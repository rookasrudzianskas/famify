import "react-native-url-polyfill/auto";
import React, {useEffect, useState} from "react";

import { SupabaseContext } from "./SupabaseContext";
import {Session} from "@supabase/supabase-js";
import {supabase} from "@/supabase";

export const SupabaseProvider = (props) => {
	const [session, setSession] = useState<Session | null>(null)

	useEffect(() => {
		supabase.auth.getSession().then(({ data: { session } }) => {
			setSession(session)
		})

		supabase.auth.onAuthStateChange((_event, session) => {
			setSession(session)
		})
	}, []);

	return (
		<SupabaseContext.Provider
			value={{
				session,
				supabase,
			}}
		>
			{props.children}
		</SupabaseContext.Provider>
	);
};
