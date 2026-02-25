import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { Dimensions, StyleSheet, Text, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { z } from "zod";
import { s, vs } from "react-native-size-matters";

const Login = () => {
  const { width, height } = Dimensions.get("window");
  const schema = z.object({
    email: z.string().min(1, { message: "Email is required" }),
    password: z
      .string()
      .min(1, "Password is required")
      .min(6, "Password must be at least 6 characters"),
  });

  type formSchemaType = z.infer<typeof schema>;
  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<formSchemaType>({
    resolver: zodResolver(schema),
  });
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Log into{"\n"}your account</Text>
      <Controller
        control={control}
        name="email"
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            placeholder="Email address"
            placeholderTextColor="#464447"
            secureTextEntry
            value={value}
            onChangeText={onChange}
            onBlur={onBlur}
            style={{
              borderBottomWidth: 0.2,
              paddingVertical: 12,
              paddingHorizontal: 0,
              marginVertical: 10,
              width: width * 0.8,
              fontSize: 16,
              fontWeight: "600",
            }}
          />
        )}
      />
      <Controller
        control={control}
        name="password"
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            placeholder="Password"
            placeholderTextColor="#464447"
            value={value}
            onChangeText={onChange}
            onBlur={onBlur}
            style={{
              borderBottomWidth: 0.2,
              paddingVertical: 12,
              paddingHorizontal: 0,
              marginVertical: 10,
              width: width * 0.8,
              fontSize: 16,
              fontWeight: "600",
            }}
          />
        )}
      />
      <Text style={styles.forgotPassword}>
  Forgot Password?
</Text>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: s(20),
    backgroundColor: "#f5f5f5",
    paddingTop: vs(20),
  },
  title: {
    fontSize: s(24),
    fontWeight: "400",
    textAlign: "left",
  },
  forgotPassword: {
    alignSelf: "flex-end",
    marginTop: vs(8),
    fontSize: s(14),
    fontWeight: "500",
  }
});
