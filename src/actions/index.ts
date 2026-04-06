import { ActionError, defineAction } from "astro:actions";
import { z } from "astro/zod";
import { pool } from "../lib/db";

const leadSchema = z.object({
  nombres: z.string().trim().min(2, "Ingresa tus nombres"),
  apellidos: z.string().trim().min(2, "Ingresa tus apellidos"),
  celular: z
    .string()
    .trim()
    .min(9, "Ingresa un número válido")
    .max(20, "Ingresa un número válido"),
  medioContacto: z.enum(["whatsapp", "llamada"], {
    message: "Selecciona cómo prefieres que te contactemos",
  }),
  servicioInteres: z.string().trim().optional(),
  mensaje: z
    .string()
    .trim()
    .max(500, "Tu mensaje no debe superar los 500 caracteres")
    .optional(),
});

export const server = {
  submitLead: defineAction({
    accept: "form",
    input: leadSchema,
    handler: async (input) => {
      const id = crypto.randomUUID();

      try {
        console.log("submitLead: inicio");

        const ping = await pool.query("SELECT NOW() AS now");
        console.log("submitLead: conexión OK", ping.rows[0]);

        const tableCheck = await pool.query(
          "SELECT to_regclass('public.leads') AS table_name",
        );
        console.log("submitLead: verificación tabla", tableCheck.rows[0]);

        await pool.query(
          `
          INSERT INTO leads (
            id,
            nombres,
            apellidos,
            celular,
            medio_contacto,
            servicio_interes,
            mensaje
          )
          VALUES ($1, $2, $3, $4, $5, $6, $7)
          `,
          [
            id,
            input.nombres,
            input.apellidos,
            input.celular,
            input.medioContacto,
            input.servicioInteres || null,
            input.mensaje || null,
          ],
        );

        console.log("submitLead: insert OK", { id });

        return {
          success: true,
          message:
            "Gracias. Recibimos tus datos correctamente y pronto nos pondremos en contacto contigo.",
        };
      } catch (error) {
        console.error("submitLead: error real", error);
        console.error(
          "submitLead: mensaje",
          error instanceof Error ? error.message : String(error),
        );

        throw new ActionError({
          code: "INTERNAL_SERVER_ERROR",
          message: "No se pudo guardar el formulario",
        });
      }
    },
  }),
};
