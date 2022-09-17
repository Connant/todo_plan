import React from "react";
import "./settings.scss";

export default function Settings(): JSX.Element {
  return (
    <section className="settings">
      <h3 className="settings__title">Settings</h3>

      <h4 className="settings__form-title">Color theme:</h4>

      <form className="settings__form">
        <input
          className="settings__form--input"
          id="darck"
          type="radio"
          name="theme"
          value="darck"
          defaultChecked
        />
        <label className="settings__form--label" htmlFor="darck">
          Darck
        </label>
        <input
          className="settings__form--input"
          id="light"
          type="radio"
          name="theme"
          value="light"
        />
        <label className="settings__form--label" htmlFor="light">
          Light
        </label>
        <input
          className="settings__form--input"
          id="gray"
          type="radio"
          name="theme"
          value="gray"
        />
        <label className="settings__form--label" htmlFor="gray">
          Gray
        </label>
        <input
          className="settings__form--input"
          id="pink"
          type="radio"
          name="theme"
          value="pink"
        />
        <label className="settings__form--label" htmlFor="pink">
          Pink
        </label>
        <input
          className="settings__form--input"
          id="blue"
          type="radio"
          name="theme"
          value="blue"
        />
        <label className="settings__form--label" htmlFor="blue">
          Blue
        </label>
        <input
          className="settings__form--input"
          id="green"
          type="radio"
          name="theme"
          value="green"
        />
        <label className="settings__form--label" htmlFor="green">
          Green
        </label>
      </form>

      <h4 className="settings__form-title">Fonts:</h4>
      <form className="settings__form">
        <input
          className="settings__form--input"
          id="quicksand"
          type="radio"
          name="fonts"
          value="quicksand"
          defaultChecked
        />
        <label className="settings__form--label font" htmlFor="quicksand">
          Nunito
        </label>
        <input
          className="settings__form--input"
          id="caveat"
          type="radio"
          name="fonts"
          value="caveat"
        />
        <label className="settings__form--label font" htmlFor="caveat">
          Caveat
        </label>
        <input
          className="settings__form--input"
          id="lora"
          type="radio"
          name="fonts"
          value="lora"
        />
        <label className="settings__form--label font" htmlFor="lora">
          Lora
        </label>
      </form>
    </section>
  );
}
