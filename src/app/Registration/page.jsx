"use client";
import { useRouter } from "next/navigation";
import * as React from "react";
import { Button, Form, Input } from "antd";

export default function page() {
  const router = useRouter();
  const onFinish = (values) => {
    console.log(values);
    var Str =
      "firtname=" +
      values.firtname +
      "&lastname=" +
      values.lastname +
      "&email=" +
      values.email +
      "&password=" +
      values.password +
      "&passwords=" +
      values.passwords;
    console.log(Str);
    router.push("/Profile?" + Str);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      style={{
        maxWidth: 600,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="firtname"
        name="firtname"
        rules={[
          {
            required: true,
            message: "Please input your firtname!",
          },
          {
            message: "this is error",
            validator: (_, value) => {
              if (/^[a-zA-Z]+$/.test(value)) {
                return Promise.resolve();
              } else {
                return Promise.reject("Some message here");
              }
            },
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="lastname"
        name="lastname"
        rules={[
          {
            required: true,
            message: "Please input your lastname!",
          },
          {
            message: "this is error",
            validator: (_, value) => {
              if (/^[a-zA-Z]+$/.test(value)) {
                return Promise.resolve();
              } else {
                return Promise.reject("Some message here");
              }
            },
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="email"
        name="email"
        rules={[
          {
            required: true,
            message: "Please input your email!",
          },
          {
            message: "this is error",
            validator: (_, value) => {
              if (
                /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value)
              ) {
                return Promise.resolve();
              } else {
                return Promise.reject("Some message here");
              }
            },
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
          {
            message: "this is custom",
            validator: (_, value) => {
              if (/^[\w!@#$%^&*()]{8,}$/.test(value)) {
                return Promise.resolve();
              } else {
                return Promise.reject("Some message here");
              }
            },
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        label="Passwords"
        name="passwords"
        rules={[
          {
            required: true,

            message: "Please input your password!",
          },
          {
            message: "this is custom",
            validator: (_, value) => {
              if (/^[\w!@#$%^&*()]{8,}$/.test(value)) {
                return Promise.resolve();
              } else {
                return Promise.reject("Some message here");
              }
            },
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}
