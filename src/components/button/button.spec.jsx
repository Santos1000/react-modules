import userEvent from '@testing-library/user-event';
import { Button } from '.';

const { render, screen, fireEvent } = require("@testing-library/react")

describe('<button/>', () => {
    it('should render the button with the text "read more"', () => {
      render(<Button text="read more"/>);

      expect.assertions(1);

      const button = screen.getByRole('button', { name: /read more/i });
      expect(button).toBeInTheDocument();
      // expect(button).toHaveAttribute('class', 'button'); --> for async func.
    });

    it('should call function on button click', () => {
      const fn = jest.fn(); // mock function
      render(<Button text="read more" onClick={fn} />);

      const button = screen.getByRole('button', { name: /read more/i });

      userEvent.click(button);

      expect(fn).toHaveBeenCalledTimes(1);
    });
    it('should be disabled when disabled is true', () => {
      render(<Button text="read more" disabled={true} />);

      const button = screen.getByRole('button', { name: /read more/i });

      expect(button).toBeDisabled();
    });
    it('should be enabled when disabled is false', () => {
      render(<Button text="read more" disabled={false} />);

      const button = screen.getByRole('button', { name: /read more/i });

      expect(button).toBeEnabled();
    });
})
