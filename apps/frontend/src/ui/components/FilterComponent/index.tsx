import React from "react";
import { Space, Radio, Typography } from "antd";
import { FilterOutlined } from "@ant-design/icons";

const { Title } = Typography;

interface FilterComponentProps {
  setValue: (value: string | number) => void;
  options: { value: string | number; label: React.ReactNode }[];
  defaultValue?: string | number;
}

export default function FilterComponent({
  setValue,
  options,
  defaultValue,
}: FilterComponentProps): JSX.Element {
  return (
    <Space wrap align="baseline">
      <Title level={4} style={{ color: "black", fontWeight: "300" }}>
        <span>
          <FilterOutlined />
        </span>{" "}
        Lọc theo khoảng giá:
      </Title>
      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        <Radio.Group
          onChange={(e) => setValue(e.target.value)}
          defaultValue={defaultValue}
          size="large"
        >
          {options.map((option) => (
            <Radio.Button
              key={option.value}
              value={option.value}
              style={{ borderRadius: "0" }}
            >
              {option.label}
            </Radio.Button>
          ))}
        </Radio.Group>
      </div>
    </Space>
  );
}
