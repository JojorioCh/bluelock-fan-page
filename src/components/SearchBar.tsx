import { useState, useRef } from "react";
import { Autocomplete, Loader, Group, Text, Button } from "@mantine/core";
import Banner from "./images/blueLockBanner.jpg";

export function SearchBar() {
  const timeoutRef = useRef<number>(-1);
  const [value, setValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<string[]>([]);

  const handleChange = (val: string) => {
    window.clearTimeout(timeoutRef.current);
    setValue(val);
    setData([]);

    if (val.trim().length === 0) {
      setLoading(false);
    } else {
      setLoading(true);
      timeoutRef.current = window.setTimeout(() => {
        setLoading(false);
        setData(
          [
            "Asahi Naruhaya",
            "Gin Gagamaru",
            "Gurimu Igarashi",
            "Hyoma Chigiri",
            "Jingo Raichi",
            "Meguru Bachira",
            "Okuhito Iemon",
            "Rensuke Kunigami",
            "Wataru Kuon",
            "Yoichi Isagi",
            "Yudai Imamura",
            "Ryosuke Kira ",
            "Hibiki Okawa",
            "Ikki Niko",
            "Shoei Baro",
            " Junichi Wanima",
            "Keisuke Wanima",
            "Reo Mikage",
            "Seishiro Nagi",
            "Zantetsu Tsurugi",
            "Aiki Himizu",
            "Akira Endoji",
            "Aoshi Tokimitsu",
            "Eita Otoya",
            "Hajime Nishioka",
            "Haruhiko Yuzu",
            "Jin Kiyora",
            "Jyubei Aryu",
            "Kairu Saramadara",
            "Kenyu Yukimiya",
            "Kyohei Shiguma",
            "Nijiro Nanase",
            "Ranze Kurona",
            "Reiji Hiiragi",
            "Rin Itoshi",
            "Ryusei Shido",
            "Shizuka Haiji",
            "Shingen Tanaka",
            "Taiga Tsunzaki",
            "Tabito Karasu",
            "Tetsu Sokura",
            "Yo Hiori",
            "Yukio Ishikari",
          ]
            .filter((name) => name.toLowerCase().startsWith(val.toLowerCase()))
            .map((name) => `${name}`)
        );
      }, 1000);
    }
  };
  return (
    <div
      style={{
        backgroundImage: `url(${Banner})`,
        backgroundRepeat: "no-repeat",
        color: "black",
        backgroundPosition: "25% 25%",
        backgroundSize: "cover",
      }}>
      <div
        style={{ display: "flex", flexDirection: "column", padding: "6rem" }}>
        <Group>
          <Text>
            <h1
              style={{
                fontFamily: `'Sedgwick Ave Display', cursive`,
                fontSize: "4rem",
                color: "blue",
                WebkitTextStroke: "0.0625rem white",
              }}>
              Project Blue Lock is Live!
            </h1>
            <p
              style={{
                fontFamily: `'Anton', sans-serif`,
                fontSize: "1.5rem",
                color: "blue",
                WebkitTextStroke: "0.0625rem white",
              }}>
              Search for your name. If you are able to find it in our database
              you have made it in to the program. Welcome!!
            </p>
          </Text>
        </Group>
      </div>
      <div>
        <Group
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            paddingTop: "5rem",
            paddingBottom: "10rem",
          }}>
          <Autocomplete
            value={value}
            data={data}
            onChange={handleChange}
            rightSection={loading ? <Loader size="1rem" /> : null}
            placeholder="Please Enter a Name"
            style={{ width: "20rem", fontSize: "3rem", marginRight: 0 }}
          />
          <Button style={{ width: "10rem", marginLeft: 0 }}>Search</Button>
        </Group>
      </div>
    </div>
  );
}
